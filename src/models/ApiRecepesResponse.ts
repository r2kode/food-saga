export type ApiRecepesResponse<T> = {
  /**
   * https://spoonacular.com/food-api/docs
   */
  offset: number;
  number: number;
  results: T[];
  totalResults: number;
};
