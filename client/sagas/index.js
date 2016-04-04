import { put, call, fork, take, takeEvery } from 'redux-saga/effects';
import { submitForm, submitSuccess, submitFailed } from '../actions/api';
import { SUBMIT_FORM } from '../constants/form';

// http://www.html5rocks.com/en/tutorials/es6/promises/
function get(url, data) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if(req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error('Network error'));
    };
    req.send();
  });
}

export function* getEcho(data) {
  // Just increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(get, '/echo', data);
    yield put(submitSuccess(result));
  } catch(error) {
    yield put(submitFailed(error));
  }
}

function* watchFormSubmit() {
  console.log('watching form submit');
  const form = yield take(SUBMIT_FORM);
  yield fork(getEcho, form.form);
}

export default function* rootSaga() {
  yield [
    fork(watchFormSubmit)
  ];
}
