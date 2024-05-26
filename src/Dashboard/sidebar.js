import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import { useState,useEffect } from "react";
import { closeSidebar } from "./utils";
import { CssVarsProvider } from "@mui/joy/styles";
import axiosInstance from "../axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function Sidebar() {
  const navigate=useNavigate() ;
  const [index,setIndex]=React.useState(1)


  const logoStyle = {
    width: 40,
    height: "auto",
    cursor: "pointer",
  };

  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    // other fields as needed
  });

  useEffect(() => {
    axiosInstance.get('user/get/',)
    .then(response => {
      const { email, first_name, last_name } = response.data;
      setUserData({
        email: email , // Ensure fallbacks to avoid undefined
        firstName: first_name ,
        lastName: last_name ,
      });
      
      // If password is needed upfront, set it here or manage accordingly
    })
    .catch(error => {
      console.error('Error fetching user details:', error);
    });
  }, []);
  useEffect(() => {
    console.log(userData); // Logs when userData changes
  }, [userData]);












  


  

  return (
    <CssVarsProvider>
    
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box //fil mobile ki t7ell side bar tenzel 3alimin tetsaker , call a function closeSidebar (transfer it to js)
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1.3, alignItems: "center" }}>
      <img
                    src={
                      "https://3dsmartfactory.csit.ma/images/2nd-black-logo.png"
                    }
                    style={logoStyle}
                    alt="logo of sitemark"
                  />
        <Typography level="title-lg">3D SMART factory.</Typography>
      </Box>
      <Divider />
      <Box //body of side bar
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            //to be seen can be deleted
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px", //tobe seen can be deleted
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton selected={index === 1}
            onClick={() => setIndex(1)}>
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          
          <ListItem>
          <Link to="/dashboard/jobs" style={{ textDecoration: 'none', color: 'inherit', width:'100%'}}>
            <ListItemButton selected={index === 2}
            onClick={() => setIndex(2)}>
              <DashboardRoundedIcon />
              
              <ListItemContent>
                <Typography level="title-sm">Jobs</Typography>
              </ListItemContent>
              
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
          <Link to="/dashboard/allapplications" style={{ textDecoration: 'none', color: 'inherit', width:'100%'}}>
            <ListItemButton selected={index === 3}
            onClick={() => setIndex(3)}>
              <ShoppingCartRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">All applications</Typography>
              </ListItemContent>
            </ListItemButton>
            </Link>
          </ListItem>

          
        </List>

  
        <List //bottom list
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton selected={index === 4}
            onClick={() => setIndex(4)}>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>
          <ListItem>
          <Link to="/dashboard/editprofile" style={{ textDecoration: 'none', color: 'inherit', width:'100%'}}>
            <ListItemButton selected={index === 5}
            onClick={() => setIndex(5)}>
              <SettingsRoundedIcon />
              Account
            </ListItemButton>
            </Link>
          </ListItem>
        </List>

        <Card //Bottom post a  job
          invertedColors
          variant="soft"
          color="warning"
          size="sm"
          sx={{ boxShadow: "none" }}
        >
          <Button size="sm" variant="solid" component={Link} to='/dashboard/postjob'>
            Post job
          </Button>
        </Card>
      </Box>
      <Divider />

      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar //bottom avatr
        alt={userData.firstName}
          variant="outlined"
          size="sm"
          
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">{userData.firstName}{" "}{userData.lastName}</Typography>
          <Typography level="body-xs">{userData.email}</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral" onClick={()=>{navigate('/logout')}}>   {/* () => {navigate('/logout');}; */}
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
    </CssVarsProvider>
    
  );
}
