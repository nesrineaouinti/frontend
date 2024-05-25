import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography, Stack, Container, Divider } from "@mui/material";

export default function CompInNum() {
  return (
    <Box sx={{ bgcolor: "#fafcff" }} height={219}>
      <Stack
        direction={{ md: "row" }} //min md wenti tala3 row , weli 9bal md column //I checked where exactly it breaks 
        justifyContent="space-evenly"         //in 928px , so I set that it will be row on md(900) so when it reaches 928 it will be fine
        align="center"
        alignItems="center"
        height="100%"
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: 38,
              color: "#4281fa",
            }}
          >
            Our Productivity{" "}
            <span style={{ color: "#2f2f2f" }}>performance </span>
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={3}>
            <Box>
              <Typography>Jobs</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 40 }}>
                <span style={{ color: "#4281fa" }}>+</span>50
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />

            <Box>
              <Typography>Interns</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 40 }}>
                <span style={{ color: "#4281fa" }}>+</span>150
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box>
              <Typography>Employers</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 40 }}>
                <span style={{ color: "#4281fa" }}>+</span>55
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
