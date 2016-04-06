import { put, call, fork, take } from 'redux-saga/effects';
import { submitSuccess, submitFailed } from '../actions/api';
import { SUBMIT_FORM } from '../constants/api';
import { fetch } from '../services/helpers';

export function* getEcho(data) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, '/echo', data);
    yield put(submitSuccess(result));
  } catch(error) {
    yield put(submitFailed(error));
  }
}

export function* watchFormSubmit() {
  // watching form submit
  while(true) {
    const form = yield take(SUBMIT_FORM);
    yield fork(getEcho, form.data);
  }
}
