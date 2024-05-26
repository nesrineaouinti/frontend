import * as React from "react";
import { Box, Container, Typography, Stack, Badge, Grid } from "@mui/material";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';


function Textt() {
    return (
      <Box id="Featured"
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
          Featured <span style={{ color:'#2f2f2f'}}>job of the week.</span>
        </Typography>
        <Typography
          style={{
            color: "#C5D0E6",
            fontFamily: "Inter",
            fontSize: 18,
            fontWeight: 250,
          }}
        >
          Find more than 500 job vacancies of your dreams, from startup companies, unions, to bonafides.
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
  export default function ExploreJobs(){
    return (
        <Container
      sx={{ pt:{xs:8,sm:10} ,display: "flex", flexDirection: "column", alignItems: "center" }}
    >
    <OrangeBtnn/>
    <Textt/>
    </Container>
)
  }