import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {stepConnectorClasses} from "@mui/material/StepConnector";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Typography } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      "linear-gradient(136deg, #4281fa 0%, #6290fc 75%, #225ce0 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      "linear-gradient(136deg, #4281fa 0%, #6290fc 75%, #225ce0 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(136deg, #4281fa 0%, #6290fc 75%, #225ce0 100%)",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.5)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, #4281fa 0%, #6290fc 75%, #225ce0 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props;

  const icons = {
    1: <BackupOutlinedIcon />,
    2: <RemoveRedEyeOutlinedIcon />,
    3: <AccessTimeOutlinedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = [
  "Sent",
  "In review",
  "Desicion",
];


export default function StepperComp2({ status }) {

  const  getStepper=(status)=>{
    switch (status) {
      case 'sent':
        return (<Stepper
          alternativeLabel
          activeStep={0}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>)
      case 'in review':
        return  (<Stepper
          alternativeLabel
          activeStep={1}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>)
      case 'accepted':
        return (<Stepper
        alternativeLabel
        activeStep={2}
        connector={<ColorlibConnector />}
      >
        <Step >
            <StepLabel  StepIconComponent={ColorlibStepIcon}>sent</StepLabel>
          </Step>
          <Step >
            <StepLabel  StepIconComponent={ColorlibStepIcon}>In review</StepLabel>
          </Step>
          <Step >
            <StepLabel  StepIconComponent={ColorlibStepIcon}><Typography color='green'>Accepted</Typography></StepLabel>
          </Step>
      </Stepper> )

      case 'rejected':
        return  (<Stepper
          alternativeLabel
          activeStep={2}
          connector={<ColorlibConnector />}
        >
          <Step >
              <StepLabel  StepIconComponent={ColorlibStepIcon}>sent</StepLabel>
            </Step>
            <Step >
              <StepLabel  StepIconComponent={ColorlibStepIcon}>In review</StepLabel>
            </Step>
            <Step >
              <StepLabel  StepIconComponent={ColorlibStepIcon}><Typography color='red'>Rejected</Typography></StepLabel>
            </Step>
        </Stepper> )
      default:  //other values than sent in review ...
        return (<Stepper
          alternativeLabel
          activeStep={-1}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>)
    }

  }
  

  return (
    
    <Stack sx={{ width: "100%" }} spacing={4}>
      {getStepper(status)}
     
    </Stack>
  );
}
