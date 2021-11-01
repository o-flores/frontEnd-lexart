import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DropDown({ categories, name }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id={name}>{name}</InputLabel>
        <Select
          labelId={name}
          label={name}
          value={value}
          onChange={handleChange}
        >
          {categories.map((category) => <MenuItem key={category} value={category}>{category}</MenuItem>)}
        </Select>
      </FormControl>
    </>
  )
}

export default DropDown;
