import * as React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const logoStyle = {
  width: 40,
  height: "auto",
  cursor: "pointer",
};

 /*(normalement t3adeha fil prop t3adeha fil prop ta3 NavBar(isLoggedIn) but here for test) */
export default function NavBar() {
     const [isLoggedIn, setIsLoggedIn] = React.useState(false);
     const navigate =useNavigate()

    React.useEffect(() => {
        // Check if the JWT token exists in local storage
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            // If token exists, user is logged in
            setIsLoggedIn(true);
        }
    }, []);





  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    
    navigate('/logout');
    
  };
  const handleAccount = () => {navigate('/profile');};

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-7px",
                px: 0,
              }}
            >
              {/*PC HOME ABOUT */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {/*LOGO PC , yetna7a fil phone */}
                <Link to="/">
                <img
                  src={
                    "https://3dsmartfactory.csit.ma/images/2nd-black-logo.png"
                  }
                  style={logoStyle}
                  alt="logo of sitemark"
                  
                />
               </Link>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  onClick={() => scrollToSection("applysteps")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    How to Apply
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("Featured")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Featured
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("contact")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contact Us
                  </Typography>
                </MenuItem>
               
               
                {/* on PC, isLoggedIn=>show jobs tabs , when clicked transfer to all Jobs page */}
                {isLoggedIn && (
                  <MenuItem
                    
                    sx={{ py: "6px", px: "12px" }}
                  > <Link to="/jobs" style={{ textDecoration: 'none', color: 'inherit', width:'100%'}}>
                    <Typography variant="body2" color="text.primary">
                      Jobs 
                    </Typography> </Link>
                  </MenuItem>
                )}
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  position: "center",
                }}
              >
                {isLoggedIn ? (
                  <React.Fragment>
                    <Avatar
                      onClick={handleAvatarClick}
                      sx={{ cursor: "pointer" }}
                    >
                      {/* Add avatar image or initials */}
                    </Avatar>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleAccount}>Account</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                    <Button
      size="small"
      variant="outlined"
      component={Link}
      to="/myspace"
      sx={{ p: 0.5, ml: 1 }}
    >
      MySpace
    </Button>
                  </React.Fragment>
                ) : (
                  <img
                    src={
                      "https://3dsmartfactory.csit.ma/images/2nd-black-logo.png"
                    }
                    style={logoStyle}
                    alt="logo of sitemark"
                  />
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {isLoggedIn ? (
                <React.Fragment>
                  <Button
      variant="outlined"
      component={Link}
      to="/myspace"
    >
      MySpace
    </Button>
                  <Avatar
                    onClick={handleAvatarClick}
                    sx={{ cursor: "pointer" }}
                  >
                    {/* Add avatar image or initials */}
                  </Avatar>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleAccount}>Account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component={Link}
      to="/signin/"
                    
                  >
                    Sign in
                  </Button>
                  <Button
      color="primary"
      variant="contained"
      size="small"
      component={Link}
      to="/signup/"
      sx={{ borderRadius: "12px" }}
    >
      Sign up
    </Button>
                </React.Fragment>
              )}
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem onClick={() => scrollToSection("applysteps")}>
                    How to apply
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("Featured")}>
                  Featured
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("contact")}>
                    Contact Us
                  </MenuItem>
                  
                  
                  {/* on mobile, isLoggedIn=>show jobs tabs , when clicked transfer to all Jobs page */}
                  {isLoggedIn && (
                    <MenuItem >
                    <Link to="/jobs" style={{ textDecoration: 'none', color: 'inherit', width:'100%'}}>
                      Jobs</Link>
                    </MenuItem>
                  )}
                  <Divider />
                  {/*KINDA ZEYDIN IDK najmo na7ohom jemla*/}
                  {isLoggedIn ? (
                    <React.Fragment>
                      <MenuItem>
                      <Button
      color="primary"
      variant="contained"
      component={Link}
      to="/myspace"
      sx={{ width: "100%" }}
    >
      MySpace
    </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={handleLogout}
                          sx={{ width: "100%" }}
                        >
                          Logout
                        </Button>
                      </MenuItem>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <MenuItem>
                      <Button
      color="primary"
      variant="contained"
      component={Link}
      to="/signup"
      sx={{ width: "100%" }}
    >
      Sign up
    </Button>
                      </MenuItem>
                      <MenuItem>
                      <Button
      color="primary"
      variant="outlined"
      component={Link}
      to="/signin/"
      sx={{ width: "100%" }}
    >
      Sign in
    </Button>
                      </MenuItem>
                    </React.Fragment>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};


