import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecepesResponse, Recepes, ResponseError } from '../../models';
import { RootState } from '../../store';

type SpoonacularState = {
  data: Recepes[];
  error: ResponseError;
};

export const initialState: SpoonacularState = {
  data: [],
  error: null,
};

const slice = createSlice({
  name: 'spoonacular',
  initialState,
  reducers: {
    fetchSuccess: (state, { payload }: PayloadAction<RecepesResponse>) => {
      const { results } = payload;
      state.data = results;
    },
    fetchFailure: (state, { payload }: PayloadAction<ResponseError>) => {
      state.error = payload;
    },
  },
});

export const spoonacularActions = {
  fetch: createAction<string>('spoonacular/fetch'),
  fetchSuccess: createAction<RecepesResponse>('spoonacular/fetchSuccess'),
  fetchFailure: createAction<ResponseError>('spoonacular/fetchFailure'),
};

export const selectSpoonacularData = (state: RootState) =>
  state.spoonacular.data;

export default slice.reducer;
