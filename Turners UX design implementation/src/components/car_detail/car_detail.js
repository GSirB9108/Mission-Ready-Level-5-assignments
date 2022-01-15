import React from 'react'
import './car_detail.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {makeStyles} from '@mui/styles';
//import { ClassNames } from '@emotion/react';

const styles = makeStyles({
    inputBar:{
        width:"20%"
    }
})

export default function Cardetail() {
    const classes=styles();
    

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(null);

    return (
        <div className='cardetailwhole'>
            <div className='cardetailbar' style={{backgroundImage: "url(/turners/bar1.png"}}>
            <h1>Car Details</h1>
            </div>
            <p>Car Registration Number</p>
            <TextField id="outlined-basic"  variant="outlined" />
            <p>How do you use your car?</p>
            <FormControl fullWidth className={classes.inputBar}>
            <InputLabel id="demo-simple-select-label">Please choose one</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <p>At what address do you keep your car?</p>
            <TextField id="outlined-basic"  variant="outlined" />
            <p>Policy start date:</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <div className='add_car'>
            <p>Add another car</p>
            <AddCircleIcon color="primary"/>
            </div>
        </div>
    )
}
