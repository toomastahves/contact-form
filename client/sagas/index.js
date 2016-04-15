import { fork } from 'redux-saga/effects';
import { watchCreateContact, watchListContacts } from './api';

export default function* rootSaga() {
  yield [
    fork(watchCreateContact),
    fork(watchListContacts)
  ];
}
