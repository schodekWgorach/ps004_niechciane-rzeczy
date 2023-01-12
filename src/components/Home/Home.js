import React, { Component } from "react";

class Home extends Component {
    state = {};
    render() {
        return (
            <>
                <Header />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
                <WhoDoWeHelp />
                <Contact />
                <Footer />
            </>
        );
    }
}

export default Home;