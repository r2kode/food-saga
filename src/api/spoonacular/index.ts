import { ApiRecepesResponse, Recepes } from '../../models';

const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const headers = new Headers({
  'x-api-key': SPOONACULAR_API_KEY,
});
const options = {
  method: 'GET',
  headers,
};

const apiRequest = async (ingredient: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}`,
    options
  );
  const data = await response.json();

  return data;
};

export async function getRecepes(ingredient: string) {
  try {
    const data = await apiRequest(ingredient);
    return data as ApiRecepesResponse<Recepes>;
  } catch (error) {
    return error;
  }
}
