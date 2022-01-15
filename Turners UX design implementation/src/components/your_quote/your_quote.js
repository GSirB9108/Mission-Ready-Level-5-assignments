import React from 'react';
import './your_quote.css';
import TextField from '@mui/material/TextField';

export default function Yourquote() {
    return (
        <div>
            <div className='quote_texts'>
            <h1>Your Quote</h1>
            <h3>Email Address</h3>
            <p>Your quote will be sent to this email within the next two minutes. We look forward to welcoming you into the Turner’s family</p>
            <TextField id="outlined-basic"  variant="outlined" />
            </div>
        </div>
    )
}
