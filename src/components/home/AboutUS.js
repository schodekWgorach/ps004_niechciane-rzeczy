import React, { Component } from "react";

class AboutUs extends Component {
    state = {};
    render() {
        return (
            <section className="aboutUs">
                <div className="row">
                    <div className="aboutUsLeft col-8">
                        <h3>O nas</h3>
                        <div className="decorationImage3"></div>
                        <p>
                            Fundación Capital works to improve the economic and financial lives of people living
                            in social vulnerability around the world, partnering with
                            governments and the private sector to design and deliver solutions
                            that increase economic prospects for millions.
                        </p>
                        <div className="aboutUsSignature"></div>
                    </div>
                    <div className="aboutUsRight col-8">
                        <div className="aboutUsPhoto"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;