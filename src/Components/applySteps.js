import * as React from "react";
import { Box, Container, Typography, Stack, Badge, Grid } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

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
          color: "#2f2f2f",
          fontFamily: "Inter",
          fontSize: 40,
          fontWeight: 400,
        }}
      >
        The fast and <span style={{ color: "#4281fa" }}>simple process.</span>
      </Typography>
      <Typography
        style={{
          color: "#C5D0E6",
          fontFamily: "Inter",
          fontSize: 18,
          fontWeight: 250,
        }}
      >
        Jofind carries the theme of technology in helping you find a job with an
        easy and fast process.
      </Typography>
    </Box>
  );
}

function OrangeBtnn() {
  return (
    <Box id="applysteps"
      width="fit-content"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gap={1}
      bgcolor="#FFF1E0"
      sx={{ py: 0.3, px: 1, borderRadius: 1 }}
    >
      <LeaderboardIcon sx={{ color: "#DB9B10" }} />
      <Typography
        style={{
          color: "#DB9B10",
          fontFamily: "Inter",
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        started
      </Typography>
    </Box>
  );
}

function Apply() {
  return (
    <Box  sx={{ pt: 3 }}>
      <Grid 
        container
        columns={{ xs: 2, md: 4 }}
        columnSpacing={{ sm: 7, md: 7, xs: 10, l: 11 }}
        display="flex"
        justifyContent="space-evenly"
      >
        <Grid item>
          <Stack
            display="flex"
            alignItems="center"
            maxWidth={{ xs: 130, md: 170 }}
          >
            <Badge badgeContent={1} color="error" anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
              <img alt="img" src="1.png" style={{ height: 150, width: 150 }} />
            </Badge>
            <Typography
              style={{
                color: "#2f2f2f",
                fontFamily: "Inter",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Registration
            </Typography>

            <Box align="center">
              <Typography
                style={{
                  color: "#C5D0E6",
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontWeight: 200,
                }}
              >
                Take 5 minutes to register an account in our platform.
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item>
          <Stack
            display="flex"
            alignItems="center"
            maxWidth={{ xs: 130, md: 170 }}
          >
            <Badge badgeContent={2} color="error" anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
            <img alt="img" src="2.png" style={{ height: 150, width: 150 }} />
            </Badge>
            <Typography
              style={{
                color: "#2f2f2f",
                fontFamily: "Inter",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Apply Job
            </Typography>

            <Box align="center">
              <Typography
                style={{
                  color: "#C5D0E6",
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontWeight: 200,
                }}
              >
                Search your dream job and upload your CV according to your
                field.
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          <Stack
            display="flex"
            alignItems="center"
            maxWidth={{ xs: 130, md: 170 }}
          >
            <Badge badgeContent={3} color="error" anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
            <img alt="img"
              src="3.png"
              style={{ height: 150, width: 150 }}
            />
            </Badge>
            <Typography
              style={{
                color: "#2f2f2f",
                fontFamily: "Inter",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Interview
            </Typography>

            <Box align="center">
              <Typography
                style={{
                  color: "#C5D0E6",
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontWeight: 200,
                }}
              >
                point out your skills and strengths at the interview.
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item>
          <Stack
            display="flex"
            alignItems="center"
            maxWidth={{ xs: 130, md: 170 }}
          >
            <Badge badgeContent={4} color="error" anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
            <img alt="img"
              src="4.png"
              style={{ height: 150, width: 150 }}/>
            
            </Badge>
            <Typography
              style={{
                color: "#2f2f2f",
                fontFamily: "Inter",
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Cheers!
            </Typography>

            <Box align="center">
              <Typography
                style={{
                  color: "#C5D0E6",
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontWeight: 200,
                }}
              >
                You are one of us now,It's time for your contract.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function ApplySteps() {
  return (
    <Container
      sx={{ pt:{xs:8,sm:10} ,display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <OrangeBtnn />
      <Textt  />
      <Apply />
    </Container>
  );
}
