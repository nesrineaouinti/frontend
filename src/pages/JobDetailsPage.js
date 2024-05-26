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
import { Badge, Stack, Card, Divider, CardActions, Alert } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { TextareaAutosize, InputAdornment } from "@mui/material";
import ModalButton from "../EditProfiles/ModalButton";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios";

export default function JobDetailsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState([]);
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`jobs/${jobId}/`) // Make sure to correct the URL based on your API endpoint
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        alert("error");
      });

    axiosInstance
      .get("applications/")
      .then((response) => {
        const applied = response.data.some(
          (app) => app.job === parseInt(jobId)
        );
        setAlreadyApplied(applied);
      })
      .catch((error) => {
        console.error("Error checking if already applied job: ", error);
        alert("Error checking if already applied job: ", error);
      });
  }, [jobId]); // Fetch job details when jobId changes

  useEffect(() => {
    console.log(job.skills);
    console.log(alreadyApplied);
  });
  if (!job) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: "800px",
        mx: "auto",
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 3 },
      }}
    >
      <Card sx={{ p: { md: 4 }, py: { xs: 3, md: "auto" } }}>
        <Container component="main" alignItems="left">
          <Stack direction="column">
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="column">
                <Typography component="h1" variant="h5">
                  {job.title}
                </Typography>
                <Stack direction="row" spacing={1} paddingBottom={3}>
                  {job.skills &&
                    job.skills.split(",").map(
                      (
                        skill,
                        index //if there is skills then render
                      ) => (
                        <Chip
                          key={index}
                          variant="outlined"
                          label={skill}
                          color="warning"
                          size="small"
                        />
                      )
                    )}
                </Stack>
              </Stack>
              <Typography
                color="primary.main"
                style={{ fontSize: 30, fontWeight: 400 }}
              >
                {job.salary}${" "}
                <span style={{ color: "#1E1E1E", fontSize: 14 }}>/month</span>
              </Typography>
            </Stack>
            <Typography style={{ color: "#A9B4CD", fontSize: 16 }}>
              {job.summary}
            </Typography>
            <Divider />
            <Typography sx={{ pt: 3, fontSize: 20 }}>
              {job.description}
            </Typography>
            <Divider />

            <CardActions sx={{ mt: 3, justifyContent: "flex-end" }}>
              {alreadyApplied ? (
                <Button disabled variant="contained">
                  already applied
                </Button>
              ) : (
                <ModalButton job={jobId} />
              )}
            </CardActions>
          </Stack>
        </Container>
      </Card>
    </Box>
  );
}
