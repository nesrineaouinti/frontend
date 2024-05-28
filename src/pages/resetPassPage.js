import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../axios";
import PasswordMeterInput from "../Components/passwordMeterInput";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassPage = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSendCode = () => {
    if (email === "") {
      setEmailError("Please enter your email");
      return; //maykmlch ychouf les conditions suivants :
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    axiosInstance
      .post(`user/sendcode/${email}/`)

      .then((res) => {
        toast.success("code sent successfully , check your email");
      })
      .catch((error) => {
        console.error(error);
        toast.error("error sending code");
      });
  };

  const handleCodeSubmit = () => {
    const trimmedEmail = email.trim(); //remove whitespaces if there is a space email=user.email doesnt work
    const trimmedCode = code.trim();
    axiosInstance
      .post(`user/verifycode/`, {
        email: trimmedEmail,
        code: trimmedCode,
      })

      .then((res) => {
        toast.success("Code verified successfully");

        setIsVerified(true); //this will show us the component to enter our new password
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid email or code.");
      });
  };

  const [newPassword, setNewPassword] = useState("");
  // React.useEffect(() => {
  //   console.log("New Password:", newPassword);
  // }, [newPassword]);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.light" }}>
        <LockResetIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ pb: 2 }}>
        Reset your password
      </Typography>
      {!isVerified ? (
        <Box
          component="form"
          noValidate
          sx={{ mt: 1, Width: "100%" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <TextField
            value={email}
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={emailError}
            helperText={emailError}
            onChange={(ev) => {
              setEmail(ev.target.value);
              setEmailError("");
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            marginTop={1}
            spacing={9}
          >
            <Button variant="outlined" onClick={handleSendCode} size="small">
              Send code
            </Button>
            <TextField
              size="small"
              variant="standard"
              label="Enter code here"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
          </Stack>
          <Button
            disabled={code.length < 6 && !emailError}
            variant="contained"
            sx={{ mt: 10 }}
            onClick={handleCodeSubmit}
          >
            Submit
          </Button>
        </Box>
      ) : (
        <Box>
          <PasswordMeterInput email={email} />
        </Box>
      )}
    </Box>
  );
};

export default ResetPassPage;
