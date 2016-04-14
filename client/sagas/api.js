import { put, call, fork, take } from 'redux-saga/effects';
import { createContactSuccess, createContactFailed } from '../actions/api';
import { CREATE_CONTACT_REQUEST } from '../constants/api';
import { fetch } from '../services/helpers';

export function* createContact(data) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, '/contact', 'POST', data);
    yield put(createContactSuccess(result));
  } catch(error) {
    yield put(createContactFailed(error));
  }
}

export function* watchCreateContact() {
  // watching contact creation
  while(true) {
    const form = yield take(CREATE_CONTACT_REQUEST);
    yield fork(createContact, form.data);
  }
}
