import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { toast ,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const theme = createTheme({
  palette: {
    primary: {
      main: "#4281fa",
      light: "#fafcff",
    },

    secondary: {
      //for text
      main: "#2f2f2f", //black by default
      light: "#A9B4CD",
    },

    orange: {
      main: "#DB9B10",
      light: "#FFF1E0",
    },
  },

  typography: {
    fontFamily: "Inter",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //the CssVarprovider should be put inside the jou iu components , dont put it here in root , it conflicts with StepperComp2
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);

/*<Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <JobsTable/> */
