import { fork } from 'redux-saga/effects';
import { watchCreateContact, watchListContacts, watchGetContact } from './api';

export default function* rootSaga() {
  yield [
    fork(watchCreateContact),
    fork(watchListContacts),
    fork(watchGetContact)
  ];
}
