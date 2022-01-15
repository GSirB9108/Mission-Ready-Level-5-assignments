import React from 'react';
import './addon.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Addon() {
    return (
        <div>
            <div className='addon_texts'>
            <h1>Add-Ons</h1>
            <p>Select Add-Ons (optional)</p>
            </div>

            <div className='addcard'>
            <Card sx={{ minWidth: 275 }}>
                <CardActionArea>
                <CardContent>
                    
                    <Typography variant="h5" component="div">
                    Mechanical Breakdown Insurance add-on
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </CardActionArea>
            </Card>
            </div>
        </div>
    )
}
