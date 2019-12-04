import { sampleAction, changeData } from 'actions';
import { takeLatest, all, put } from 'redux-saga/effects';
// import { get } from 'axios';

function* workerSample({ payload }) {

  yield put(changeData(payload))
}

export default function* watchReminders() {
  yield all([
    takeLatest(sampleAction.toString(), workerSample),
  ]);
}
