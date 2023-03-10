import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getRecepes } from '../../api/spoonacular';
import { spoonacularActions } from '../../data/spoonacular';
import { RecepesResponse } from '../../models';

function* fetchRecepes({ payload }: PayloadAction<string>) {
  try {
    const results: RecepesResponse = yield call(getRecepes, payload);
    yield put(spoonacularActions.fetchSuccess(results));
  } catch (error) {
    yield put(spoonacularActions.fetchFailure(error));
  }
}

export default function* spoonacularSagas() {
  yield takeLatest(spoonacularActions.fetch.type, fetchRecepes);
}
