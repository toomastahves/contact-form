import { put, call, fork, take } from 'redux-saga/effects';
import { submitSuccess, submitFailed } from '../actions/api';
import { SUBMIT_FORM } from '../constants/api';

// http://www.html5rocks.com/en/tutorials/es6/promises/
export const get = (url, data) => {
  const formData = new FormData(data);
  const obj = {};
  for(const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('POST', url);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.onload = function() {
      if(req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error('Network error'));
    };
    req.send(JSON.stringify(obj));
  });
};

export function* getEcho(data) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(get, '/echo', data);
    yield put(submitSuccess(result));
  } catch(error) {
    yield put(submitFailed(error));
  }
}

export function* watchFormSubmit() {
  // watching form submit
  while(true) {
    const form = yield take(SUBMIT_FORM);
    yield fork(getEcho, form.form);
  }
}
