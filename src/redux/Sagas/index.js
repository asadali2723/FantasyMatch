import {all, fork} from 'redux-saga/effects';
import {watchAddMatch, watchDeleteMatch} from './matchSaga';

export default function* rootSaga() {
  yield all([fork(watchAddMatch), fork(watchDeleteMatch)]);
}
