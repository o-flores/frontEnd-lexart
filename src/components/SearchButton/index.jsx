import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

function SearchButton() {
  return (
    <Button
      onClick={() => console.log('click')}
      startIcon={<SearchIcon />}
      variant="secondary"
      size="large"
    >
      <Typography variant="body" fontSize="13px">
        Procurar
      </Typography>
    </Button>
  )
}

export default SearchButton;