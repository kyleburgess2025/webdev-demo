import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import Inputs from "@/components/mui/inputs";
import DataDisplay from "@/components/mui/data";
import { Breadcrumbs, Link } from "@mui/material";

const steps = ["Inputs", "Data Display", "Done"];

export default function MuiPage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="flex flex-col items-center min-h-[85vh] justify-around">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="text.primary" href="/mui">
          MUI
        </Link>
      </Breadcrumbs>
      <Typography variant="h2">Material UI</Typography>
      {activeStep === 0 && <Inputs />}
      {activeStep === 1 && <DataDisplay />}
      {activeStep === 2 && (
        <Button>
          <Link href="/">Go Back Home</Link>
        </Button>
      )}
      <Box sx={{ width: "100%" }} className="bottom-5 absolute">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === 2}
          >
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}
