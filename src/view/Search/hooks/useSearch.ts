import { SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { spoonacularActions } from '../../../data/spoonacular';

export const useSearch = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();

  const handleRecepesSearch = () => {
    dispatch(spoonacularActions.fetch(searchPhrase));
  };

  const handleSearchInput = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchPhrase(e.target.value);
  };

  return {
    handleRecepesSearch,
    handleSearchInput,
    searchPhrase,
  };
};
