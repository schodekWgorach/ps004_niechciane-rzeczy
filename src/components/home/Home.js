import React, { Component } from "react";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUS";
import WhoDoWeHelp from "./WhoDoWeHelp";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Home() {
    return (
        <>
   {/*         <Logging />*/}
            <Navigation />
            <Header />
            <ThreeColumns />
            <FourSteps />
            <AboutUs />
            <WhoDoWeHelp />
           {/* <Contact />*/}
            <Footer />
        </>
    )};

export default Home;