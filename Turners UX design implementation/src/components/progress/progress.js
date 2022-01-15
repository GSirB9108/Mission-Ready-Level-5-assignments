import React from 'react';
import './progress.css';
import { useState } from 'react';

import Cardetail from '../../components/car_detail/car_detail';
import Driverdetail from '../../components/driver_detail/driver_detail';
import Packtype from '../../components/pack_type/pack_type';
import Addon from '../../components/add_on/addon';
import Yourquote from '../../components/your_quote/your_quote';
import Confirmation from '../../components/confirmation/Confirmation';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';

import Footer from "../../components/page1/Footer";
import Header from "../../components/page1/Header";
import { Link } from "react-router-dom";

const steps = ['DETAILS', 'YOUR QUOTE', 'CONFIRMATION'];

export default function Progress() {

  const [route, setRoute] = useState('insure_1');
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  /* const isStepOptional = (step) => {
    return step === 1;
  }; */

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    if( activeStep === 0) {
    setRoute('insure_2');
    } else if (activeStep ===1){
      setRoute('insure_3');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    //setRoute('insure_1');
    if( activeStep === 1) {
      setRoute('insure_1');
      } else if (activeStep ===2){
        setRoute('insure_2');
      }
  };

  /* const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }; */

  const handleReset = () => {
    setActiveStep(0);
    setRoute('insure_1')

  };

  return (
    <div>
    
    <div className='topbar'>
      
      <Header />
      
    </div>
    
    <div className='insure_box' style={{backgroundImage: "url(/turners/turners_top.png"}}>
    
    <h1 className="quote_header"> Car Insurance Quote </h1>
    <div className="progbar" >
    
    <Box sx={{ width: '25%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          /* if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          } */
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
    </Box>
    {/* <img src="turners/turners_top.png" alt="yard" className="yard"/> */}
    </div>

    </div>

    <br />    
    {route === 'insure_1' ?
    <div>
    <Cardetail />
    <Driverdetail />
    </div>
    : (
    route === 'insure_2' ?
    <div>
    <Packtype />
    <Addon />
    <Yourquote />
    </div>
    : <div>
      <Confirmation />
    </div>
    )
    }

    {activeStep === 2? (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}> 
            All steps completed - you&apos;re finished
          </Typography>*/}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Link to="/">
            <Button onClick={handleReset}>Back to Home</Button>
            </Link>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, marginLeft:'50px', marginRight:'50px' }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto'}} />

            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 2 ? 'Get a quote' : 'Continue'}
            </Button>

          </Box>

        </React.Fragment>
      )} 
    <Footer />   
    </div>
  );
}