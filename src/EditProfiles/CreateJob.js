import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Badge, Stack, Card } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { TextareaAutosize, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FlipCameraIosOutlinedIcon from "@mui/icons-material/FlipCameraIosOutlined";
import axiosInstance from "../axios";
import { Title } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const skillsList = [
  { name: "Design" },
  { name: "Web dev" },
  { name: "AI" },
  { name: "React" },
  { name: "Java" },
  { name: "C++" },
  { name: "Figma" },
  {
    name: "DOCKER",
  },
  { name: "Azure" },
  { name: "MachineLearning" },
  {
    name: "Linux",
  },
];

//implement the logic to only request code when user changes email or pass, name is fine without code
const defaultTheme = createTheme();

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("Web dev");
  const [description, setDescription] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = () => {
    if (
      title === "" ||
      salary === "" ||
      summary === "" ||
      skills === "" ||
      description === ""
    ) {
      alert("please fill the whole form");
    } else {
      console.log(title, salary, summary, skills);
      axiosInstance
        .post(`jobs/create/`, {
          title: title,
          salary: salary,
          summary: summary,
          skills: skills,
          description: description,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          alert("Registration successful!");
          //navigate('/');
        })
        .catch((error) => {
          console.error("Creation failed:", error);
          alert("creation failed");
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ flex: 1, width: "100%", pt: { xs: 6 } }}>
        <Stack
          spacing={4}
          sx={{
            display: "flex",
            maxWidth: "800px",
            mx: "auto",
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Card>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5" sx={{ pt: 1 }}>
                  Create a new job offer
                </Typography>
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
                        name="jobTitle"
                        fullWidth
                        id="JobTitle"
                        label="Job Title"
                        autoFocus
                        value={title}
                        onChange={(ev) => {
                          setTitle(ev.target.value);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={salary}
                        onChange={(ev) => {
                          setSalary(ev.target.value);
                        }}
                        placeholder="Salary"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        inputProps={{
                          step: 100,
                        }}
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextareaAutosize
                        aria-label="paragraph input"
                        minRows={3}
                        placeholder="Enter a brief job description to be displayed..."
                        style={{
                          width: "100%",
                          resize: "none",
                          border: "1.9px groove #D3D3D3",
                        }} // Disable resize
                        value={summary}
                        onChange={(ev) => {
                          setSummary(ev.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        onChange={(ev, value) => {
                          const names = value
                            .map((option) => option.name)
                            .join(",");
                          setSkills(names);
                        }}
                        multiple
                        id="tags-standard"
                        options={skillsList}
                        getOptionLabel={(option) => option.name}
                        defaultValue={[skillsList[1]]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Select skills in demand"
                          />
                        )}
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
                        placeholder="Detailed Job description..."
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
                      publish job
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Container>
          </Card>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
