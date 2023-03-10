import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useResults } from './hooks/useResults';
import { Recepes } from '../../models/Recepes';

export default function Results() {
  const { recepes } = useResults();

  const recepesList = recepes.map(
    ({ id, title }: Pick<Recepes, 'id' | 'title'>) => (
      <ListItem key={id} disablePadding divider>
        <ListItemText primary={title} />
      </ListItem>
    )
  );

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        bgcolor: 'background.paper',
      }}
    >
      {recepesList.length > 0 ? <List>{recepesList}</List> : null}
    </Box>
  );
}
