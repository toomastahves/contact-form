import { fork } from 'redux-saga/effects';
import { watchCreateContact, watchListContacts, watchGetContact, watchUpdateContact } from './api';

export default function* rootSaga() {
  yield [
    fork(watchCreateContact),
    fork(watchListContacts),
    fork(watchGetContact),
    fork(watchUpdateContact)
  ];
}
