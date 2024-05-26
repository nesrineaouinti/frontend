import { React, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import axiosInstance from "../axios";
import OneJob from "../Components/oneJob";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";
import FAQ from "../Components/Faq";
import { alpha } from "@mui/material";
import Testimonials from "../Components/Testimonials";
import { Box, Container } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Textt() {
  return (
    <Box
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
        All jobs <span style={{ color: "#2f2f2f" }}>in one place.</span>
      </Typography>
      <Typography
        style={{
          color: "#C5D0E6",
          fontFamily: "Inter",
          fontSize: 18,
          fontWeight: 250,
        }}
      >
        Find more than 500 job vacancies of your dreams, from startup companies,
        unions, to bonafides.
      </Typography>
    </Box>
  );
}

function OrangeBtnn() {
  return (
    <Box
      width="fit-content"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gap={1}
      bgcolor="#FFF1E0"
      sx={{ py: 0.3, px: 1, borderRadius: 1 }}
    >
      <ContentPasteSearchIcon sx={{ color: "#DB9B10" }} />
      <Typography
        style={{
          color: "#DB9B10",
          fontFamily: "Inter",
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        Explore Jobs
      </Typography>
    </Box>
  );
}
function ExploreJobss() {
  return (
    <Container
      sx={{
        pt: { xs: 8, sm: 10 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <OrangeBtnn />
      <Textt />
    </Container>
  );
}

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("jobs/")
      .then((response) => {
        setJobs(response.data);
        // alert('fetched all jobs succ')
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    console.log(jobs);
  }, [jobs]); // Log jobs whenever it updates

  return (
    <div>
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 23%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Box sx={{ pt: 13, px: { xs: 1, sm: 10, lg: 23 } }}>
          <NavBar />
          <ExploreJobss />
          <OneJob jobs={jobs} />
        </Box>
      </Box>
      <Testimonials />
      <FAQ />

      <Footer />
      <ToastContainer />
    </div>
  );
}
