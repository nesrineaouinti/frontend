import { Autocomplete, Box, Button, Container, Grid, InputAdornment, Stack, TextField, TextareaAutosize, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

    const [username, setUsername] = useState("");
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState("");
    const Navigate = useNavigate();
  
    const handleSubmit = () => {
      if (
        username === "" ||
        salary === "" ||
        description === ""
      ) {
        toast.warning("please fill the whole form");
      } else {

        axiosInstance
          .post(`contact/create/`, {
            name: username,
            email: salary,
            message: description,
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            toast.success("Message send successuflly!");

            //navigate('/');
          })
          .catch((error) => {
            console.error("Creation failed:", error);
            toast.error("creation failed");
          });
      }
    };

  return (
    <>
      <Container id='contact'
        sx={{
          pt: { xs: 8, sm: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          id="Featured"
          display="flex"
          flexDirection="column"
          align="center"
          justifyContent="center"
          sx={{ maxWidth: 600 }}
        >
          <Typography
            style={{
              color: "#4281fa",
              fontFamily: "Inter",
              fontSize: 40,
              fontWeight: 400,
            }}
          >
            Contact <span style={{ color: "#2f2f2f" }}>Us</span>
          </Typography>
          <Typography
            style={{
              color: "#C5D0E6",
              fontFamily: "Inter",
              fontSize: 18,
              fontWeight: 250,
            }}
          >
            Got a question? Need assistance with our services or have feedback? Don’t hesitate to reach out. Our team is dedicated to providing you with the support you need.
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          //onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="username"
                fullWidth
                id="username"
                label="username"
                autoFocus
                value={username}
                onChange={(ev) => {
                  setUsername(ev.target.value);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
              fullWidth
                value={salary}
                onChange={(ev) => {
                  setSalary(ev.target.value);
                }}
                placeholder="Email"
    
                inputProps={{
                  step: 100,
                }}
                
              />
            </Grid>

            <Grid item xs={12}>
              <TextareaAutosize
                value={description}
                onChange={(ev) => {
                  setDescription(ev.target.value);
                }}
                aria-label="paragraph input"
                minRows={11}
                placeholder="Entrer your message..."
                style={{
                  width: "100%",
                  resize: "none",
                  border: "1.3px groove #D3D3D3",
                }}
              />
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                Navigate(-1);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
};
export default Contact;
