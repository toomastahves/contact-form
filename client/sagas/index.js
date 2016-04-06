import { fork } from 'redux-saga/effects';
import { watchFormSubmit } from './api';

export default function* rootSaga() {
  yield [
    fork(watchFormSubmit)
  ];
}
