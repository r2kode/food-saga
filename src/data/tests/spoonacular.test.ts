import spoonacularReducer, {
  initialState,
  spoonacularActions,
} from '../spoonacular';

import { recepesResponse as mockData } from '../../mocks/recepesResponse';

describe('Spoonacular reducer', () => {
  it('should create all actions', () => {
    expect(
      Object.prototype.hasOwnProperty.call(spoonacularActions, 'fetch')
    ).toBe(true);
    expect(
      Object.prototype.hasOwnProperty.call(spoonacularActions, 'fetchSuccess')
    ).toBe(true);
    expect(
      Object.prototype.hasOwnProperty.call(spoonacularActions, 'fetchFailure')
    ).toBe(true);
  });

  it('fetchSuccess returns correct data', () => {
    expect(
      spoonacularReducer(
        initialState,
        spoonacularActions.fetchSuccess(mockData)
      )
    ).toEqual({
      ...initialState,
      data: [
        {
          id: 634698,
          title: 'Beef Tataki',
          image: 'https://spoonacular.com/recipeImages/634698-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 75081,
          title: 'Beef Wellington',
          image: 'https://spoonacular.com/recipeImages/75081-312x231.jpg',
          imageType: 'jpg',
        },
      ],
    });
  });

  it('fetchFailure return error', () => {
    expect(
      spoonacularReducer(
        initialState,
        spoonacularActions.fetchFailure('Request failed!!')
      )
    ).toEqual({
      ...initialState,
      error: 'Request failed!!',
    });
  });
});
