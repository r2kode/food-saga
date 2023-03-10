import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from './hooks/useSearch';

export default function Search() {
  const { handleRecepesSearch, handleSearchInput } = useSearch();

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        mb: 4,
        display: 'flex',
        alignItems: 'center',
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Recepes"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleSearchInput}
      />
      <IconButton
        onClick={handleRecepesSearch}
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
