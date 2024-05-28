import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";
import Applicationss from "./Applications";
import { Padding } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Button from "@mui/joy/Button";
import axiosInstance from "../axios";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function AllCandidates() {
  const [applications, setApplications] = React.useState([]);

  React.useEffect(() => {
    axiosInstance
      .get("applications/")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("Error fetching data: ", error);
      });
  }, []);

  React.useEffect(() => {
    console.log(applications);
  }, [applications]);

  return (
    <Box
      width="100%"
      sx={{
        px: { md: 5 },
        py: { md: 1 },
      }}
    >
      <CssVarsProvider>
        <Box
          sx={{
            display: "flex",
            mb: 1,
            gap: 1,
            flexDirection: { xs: "row" },
            alignItems: { xs: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography level="h2" component="h1">
            For all the active jobs:
          </Typography>
          <Button color="primary" startDecorator={<RefreshIcon />} size="sm">
            Click to refresh
          </Button>
        </Box>
        <Tabs
          variant="outlined"
          aria-label="Pricing plan"
          defaultValue={0}
          sx={{
            width: "100%",
            borderRadius: "lg",
            boxShadow: "lg",
            overflow: "auto",
          }}
        >
          <TabList
            disableUnderline
            tabFlex={1}
            sx={{
              [`& .${tabClasses.root}`]: {
                fontSize: "sm",
                fontWeight: "lg",
                [`&[aria-selected="true"]`]: {
                  color: "primary.500",
                  bgcolor: "background.surface",
                },
                [`&.${tabClasses.focusVisible}`]: {
                  outlineOffset: "-4px",
                },
              },
            }}
          >
            <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
              All Candidates
            </Tab>
          </TabList>
          <TabPanel value={0} sx={{ height: "100%" }}>
            <Applicationss data={applications} />
          </TabPanel>
        </Tabs>
      </CssVarsProvider>
    </Box>
  );
}
