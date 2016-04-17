import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as actions from '../actions/api';
import * as constants from '../constants/contact';
import { fetch } from '../services/helpers';

export function* createContact(action) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, { path: '/contact', type: 'POST', data: action.data });
    yield put(actions.createContactSuccess(result));
  } catch(error) {
    yield put(actions.createContactFailed(error));
  }
}
export function* watchCreateContact() {
  yield* takeLatest(constants.CREATE_CONTACT_REQUEST, createContact);
}

export function* listContacts() {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, { path: '/contacts', type: 'GET' });
    yield put(actions.listContactsSuccess(result));
  } catch(error) {
    yield put(actions.listContactsFailed(error));
  }
}
export function* watchListContacts() {
  yield* takeLatest(constants.LIST_CONTACTS_REQUEST, listContacts);
}

export function* getContact(action) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, { path: `/contact/${action._id}`, type: 'GET' });
    yield put(actions.getContactSuccess(result));
  } catch(error) {
    yield put(actions.getContactFailed(error));
  }
}
export function* watchGetContact() {
  yield* takeLatest(constants.GET_CONTACT_REQUEST, getContact);
}

export function* updateContact(action) {
  // Increasing server response time
  yield new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const result = yield call(fetch, { path: '/contact', type: 'PUT', data: action.data });
    yield put(actions.updateContactSuccess(result));
  } catch(error) {
    yield put(actions.updateContactFailed(error));
  }
}
export function* watchUpdateContact() {
  yield* takeLatest(constants.UPDATE_CONTACT_REQUEST, updateContact);
}
