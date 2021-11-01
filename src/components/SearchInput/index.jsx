import { TextField } from '@mui/material';
import React from 'react';

function SearchInput({ value, setValue }) {
  return (
    <TextField
      placeholder="Digite o nome do produto"
      variant="standard"
      value={value}
      onChange={(e) => setValue(e.target.value) }
    />
  )
}

export default SearchInput;
