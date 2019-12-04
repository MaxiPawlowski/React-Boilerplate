import { all, fork } from 'redux-saga/effects';

import sampleSagas from 'sagas/watchers/sampleSagas';

export default function* root() {
  yield all([
    fork(sampleSagas),
  ]);
}
