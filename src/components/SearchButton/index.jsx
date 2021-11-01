import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@mui/material';

function SearchButton() {
  return (
    <Button
      onClick={() => console.log('click')}
      startIcon={<SearchIcon />}
      variant="secondary"
    >
      Procurar
    </Button>
  )
}

export default SearchButton;