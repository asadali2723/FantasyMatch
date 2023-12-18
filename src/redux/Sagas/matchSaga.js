// sagas/matchSagas.js

import {put, takeLatest} from 'redux-saga/effects';

import {
  ADD_MATCH,
  ADD_MATCH_FAIL,
  ADD_MATCH_SUCCESS,
  DELETE_MATCH,
  DELETE_MATCH_FAIL,
  DELETE_MATCH_SUCCESS,
} from '@redux/constants';
import {hideAppLoader, showAppLoader} from '@redux/actions/loader';
import {navigate} from '@services/navigationServices';
import {Routes} from '@constants';

const fakeApiCall = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

// Sagas

function* addMatchSaga(action) {
  try {
    yield put(showAppLoader());
    yield fakeApiCall(action.payload);
    yield put(hideAppLoader());
    navigate(Routes.Dashboard);
    yield put({type: ADD_MATCH_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: ADD_MATCH_FAIL, error});
    yield put(hideAppLoader());
  }
}

function* deleteMatchSaga(action) {
  try {
    yield put(showAppLoader());
    yield fakeApiCall(action.payload);
    yield put({type: DELETE_MATCH_SUCCESS, payload: action.payload});
    yield put(hideAppLoader());
  } catch (error) {
    yield put({type: DELETE_MATCH_FAIL, error});
    yield put(hideAppLoader());
  }
}

export function* watchAddMatch() {
  yield takeLatest(ADD_MATCH, addMatchSaga);
}

export function* watchDeleteMatch() {
  yield takeLatest(DELETE_MATCH, deleteMatchSaga);
}
