import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DropDown() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormControl variant="outlined" sx={{ m:1, minWidth: 200 }}>
        <InputLabel id="categorias">Categorias</InputLabel>
        <Select
          labelId="categorias"
          label="Categorias"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="celular">Celular</MenuItem>
          <MenuItem value="geladeira">Geladeira</MenuItem>
          <MenuItem value="tv">TV</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default DropDown;
