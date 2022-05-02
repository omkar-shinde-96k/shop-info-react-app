import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Dropdown = ({ name, value, store, cb }) => {
    return (
        <>
        
            <FormControl sx={{ minWidth: 110, marginRight: "10px" }}>
                <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Area"
                    onChange={cb}
                >
                    <MenuItem value={"ALL"}>ALL</MenuItem>
                    {store.map((curr, i) => {
                        return <MenuItem key={i} value={curr.name}>{curr.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </>
    )
}
