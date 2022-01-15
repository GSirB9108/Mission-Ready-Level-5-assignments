import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import './pack_type.css';

import styled, { ThemeProvider } from 'styled-components';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const customTheme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      secondary: {
        main: grey[300],
      },
    },
  });
  
  const StyledCard = styled(Card)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.1);
    }
    `}
  `;

export default function Packtype() {
    
    return (
        <div>
            <div className='pack_texts'>
            <h1>Package Type</h1>
            <p>Select Package Type</p>
            </div>

            <div className='pack_cards'>
            <MuiThemeProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
            <StyledCard sx={{ minWidth: 275 }}>
                <CardActionArea>
                <CardActions>
                <CardContent>
                    
                    <Typography variant="h5" component="div">
                    Third Party Property Damage
                    </Typography>
                    
                    <Typography variant="body2">
                    <br />
                    <ul>
                  <li>
                    <p>✕ &nbsp; Accidental loss or damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Fire damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Theft or illegal conversion</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Legal liability</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Vehical removal</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Transport home</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Innocent party protection</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Replacement vehicle</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; New vehicle option</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Trailer cover</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Breakdown service</p>
                  </li>
                </ul>
                    </Typography>
                </CardContent>
                </CardActions>
                </CardActionArea>      
            </StyledCard>
            </ThemeProvider>
            </MuiThemeProvider >

            <MuiThemeProvider theme={customTheme}>
                <ThemeProvider theme={customTheme}>
            <StyledCard sx={{ minWidth: 275 }} >
            <CardActionArea>
                <CardActions>
                <CardContent>
                    <div className='tickappear'>
                    <p className="most-popular">Most Popular</p>
                    
                    </div>
                    <Typography variant="h5" component="div">
                    Comprehensive
                    </Typography>
                    
                    <Typography variant="body2">
                    <br />
                    <ul>
                  <li>
                    <p>✕ &nbsp; Accidental loss or damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Fire damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Theft or illegal conversion</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Legal liability</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Vehical removal</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Transport home</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Innocent party protection</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Replacement vehicle</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; New vehicle option</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Trailer cover</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Breakdown service</p>
                  </li>
                </ul>
                    </Typography>
                </CardContent>
                </CardActions>
                </CardActionArea>
            </StyledCard>
            </ThemeProvider>
            </MuiThemeProvider >

            <MuiThemeProvider theme={customTheme}>
                <ThemeProvider theme={customTheme}>
            <StyledCard sx={{ minWidth: 275 }}>
            <CardActionArea>
                <CardActions>
                <CardContent>
                    
                    <Typography variant="h5" component="div">
                    Third Party Fire and Theft
                    </Typography>
                    
                    <Typography variant="body2">
                    <br />
                    <ul>
                  <li>
                    <p>✕ &nbsp; Accidental loss or damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Fire damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Theft or illegal conversion</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Legal liability</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Vehical removal</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Transport home</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Innocent party protection</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Replacement vehicle</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; New vehicle option</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Trailer cover</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Breakdown service</p>
                  </li>
                </ul>
                    </Typography>
                </CardContent>
                </CardActions>
                </CardActionArea>
            </StyledCard>
            </ThemeProvider>
            </MuiThemeProvider>
            </div>
        </div>
    )
}
