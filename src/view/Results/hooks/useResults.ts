import { useSelector } from 'react-redux';
import { selectSpoonacularData } from '../../../data/spoonacular';

export const useResults = () => {
  const recepes = useSelector(selectSpoonacularData);

  return { recepes };
};
