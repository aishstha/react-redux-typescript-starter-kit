import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Actions } from '../constants/actions';
import http from '../utils/axios';

export default function* rootSagas() {
  yield all([]);
}
