import { describe, it } from 'vitest';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { getRecepes } from '../../api/spoonacular';
import { spoonacularActions } from '../../data/spoonacular';
import { fetchRecepes } from '../spoonacular';

import { recepesResponse } from '../../mocks/recepesResponse';

describe('saga test', () => {
  it('unit test', () => {
    testSaga(fetchRecepes, {
      payload: 'pork',
      type: '',
    })
      .next()
      .call(getRecepes, 'pork')
      .next()
      .put(spoonacularActions.fetchSuccess())
      .next();
  });

  it('integration test', () => {
    return expectSaga(fetchRecepes, {
      payload: 'pork',
      type: '',
    })
      .provide([[matchers.call.fn(getRecepes), recepesResponse]])
      .put({ type: 'spoonacular/fetchSuccess', payload: recepesResponse })
      .run();
  });
});
