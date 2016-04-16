import { put, call, fork, take } from 'redux-saga/effects';
import {
  createContactSuccess, createContactFailed, listContactsSuccess, listContactsFailed,
  getContactSuccess, getContactFailed
} from '../actions/api';
import { CREATE_CONTACT_REQUEST, LIST_CONTACTS_REQUEST, GET_CONTACT_REQUEST } from '../constants/contact';
import { fetch } from '../services/helpers';

export function* createContact(data) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, { path: '/contact', type: 'POST', data });
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

export function* listContacts(data) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, { path: '/contacts', type: 'GET', data });
    yield put(listContactsSuccess(result));
  } catch(error) {
    yield put(listContactsFailed(error));
  }
}
export function* watchListContacts() {
  // watching contact creation
  while(true) {
    const form = yield take(LIST_CONTACTS_REQUEST);
    yield fork(listContacts, form.data);
  }
}

export function* getContact(action) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, { path: `/contact/${action._id}`, type: 'GET' });
    yield put(getContactSuccess(result));
  } catch(error) {
    yield put(getContactFailed(error));
  }
}
export function* watchGetContact() {
  // watching contact creation
  while(true) {
    const action = yield take(GET_CONTACT_REQUEST);
    yield fork(getContact, action);
  }
}
