import React from "react";
import NavBar from "../Components/navBar";
import Hero from "../Components/hero";
import CompInNum from "../Components/CompInNum";
import ApplySteps from "../Components/applySteps";
import OneJob from "../Components/oneJob";
import Footer from "../Components/footer";
import { Stack, Box, Container } from "@mui/material";
import ExploreJobs from "../Components/exploreJobs";
import Dabox from "../StatusTracker/MySpace";
import PromotedJobs from "../Components/PromotedJobs";
import Contact from "./contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <CompInNum />
            <ApplySteps />
            <PromotedJobs />
            <Contact />
            <Footer />
            <ToastContainer />
        </div>
    );
}
