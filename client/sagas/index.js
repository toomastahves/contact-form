import { fork } from 'redux-saga/effects';
import { watchCreateContact } from './api';

export default function* rootSaga() {
  yield [
    fork(watchCreateContact)
  ];
}
