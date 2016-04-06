import { put, call, fork, take } from 'redux-saga/effects';
import { submitSuccess, submitFailed } from '../actions/api';
import { SUBMIT_FORM } from '../constants/form';

// http://www.html5rocks.com/en/tutorials/es6/promises/
function get(url, data) {
  const formData = new FormData(data);
  const obj = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    billing_address_field1: formData.get('billing_address_field1'),
    billing_address_field2: formData.get('billing_address_field2'),
    billing_address_field3: formData.get('billing_address_field3'),
    same_address: formData.get('same_address'),
    shipping_address_field1: formData.get('shipping_address_field1'),
    shipping_address_field2: formData.get('shipping_address_field2'),
    shipping_address_field3: formData.get('shipping_address_field3')
  };
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
  while(true) {
    console.log('watching form submit');
    const form = yield take(SUBMIT_FORM);
    yield fork(getEcho, form.form);
  }
}

export default function* rootSaga() {
  yield [
    fork(watchFormSubmit)
  ];
}
