import React, { useState } from 'react';
import '../App.scss'
import { Input, ariaLabel, Alert, Snackbar, Select, Button, Box, MenuItem, TextField, Container, TextareaAutosize, InputLabel, FormControl } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { addShopAction } from "../Redux/actions/shopActions"


export const AddShop = () => {

    const categorystore = useSelector(state => state.categoryReducer);
    const allAreas = useSelector(state => state.areaReducer) || [];

    const dispatch = useDispatch();

    const [state, setState] = useState({ name: "", category: "", area: "", open: "", close: "" });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <br />
            <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ boxShadow: 4, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <br />
                    <TextField
                        id="outlined-name"
                        label="Shop Name"
                        value={state.name || ""}
                        name="name"
                        onChange={handleChange}
                        sx={{ width: '90%' }}
                    />

                    <br />

                    <FormControl sx={{ width: '90%' }} >
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.category || ""}
                            label="Age"
                            name="category"
                            onChange={handleChange}
                        >
                            {categorystore.map((curr, i) => (
                                <MenuItem key={i} value={curr.name}>{curr.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl> <br />
                    <FormControl sx={{ width: '90%' }} >
                        <InputLabel id="demo-simple-select-label">Area</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.area || ""}
                            label="Age"
                            name="area"
                            onChange={handleChange}
                        >
                            {allAreas.map((curr, i) => (
                                <MenuItem key={i} value={curr.name}>{curr.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <div className='timepicker'>
                        <div>
                            <lable>Open &nbsp;  </lable>
                            <input type="time"  value={state.open || ""} onChange={handleChange} id="appt" name="open" />
                        </div>

                        <div>
                            <lable>Close &nbsp;</lable>
                            <input type="time"  value={state.close || ""} onChange={handleChange} id="appt" name="close" />
                        </div>
                    </div>
                    <Button
                        onClick={() => {
                            dispatch(addShopAction(state))
                            setState({})
                            console.warn(state)
                            handleClick()
                        }
                        } variant="outlined"> Submit </Button>

                    <br />

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            New Shop Added Successfully
                        </Alert>
                    </Snackbar>
                </Box>
            </Container>
        </>
    );
}