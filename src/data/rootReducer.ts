import { combineReducers } from '@reduxjs/toolkit';

import spoonacularReducer from './spoonacular';

export const rootReducer = combineReducers({
  spoonacular: spoonacularReducer,
});
