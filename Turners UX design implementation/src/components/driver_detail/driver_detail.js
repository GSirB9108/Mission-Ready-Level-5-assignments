import React from 'react'
import './driver_detail.css';

import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function Driverdetail() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(null);

    return (
        <div className='driverdetailwhole'>
            <div className='driverdetailbar' style={{backgroundImage: "url(/turners/bar2.png"}}>
            <h1>Main Driver Details</h1>
            </div>
            <p>Main Driver's name</p>
            <TextField id="outlined-basic"  variant="outlined" />
            <TextField id="outlined-basic"  variant="outlined" />
            <p>Date of Birth</p>
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
            <p>Gender</p>
            <FormControl fullWidth>
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
            <p>What licence do you currently hold?</p>
            <FormControl fullWidth>
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
            <p>How many years have you had your driver's licence for?</p>
            <FormControl fullWidth>
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
            <p>In the last 5 years, have you had any incidents involving damage or theft of a vehicle?</p>
            <FormControl fullWidth>
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
            <div className='add_driver'>
            <h2>Add another driver</h2>
            <AddCircleIcon color="primary"/>
            </div>
        </div>
    )
}
