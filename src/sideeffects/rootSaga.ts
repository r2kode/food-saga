import { all, fork } from 'redux-saga/effects';

import spoonacularSagas from './spoonacular';

const combinedSagas = [fork(spoonacularSagas)];

export default function* rootSaga() {
  yield all(combinedSagas);
}
