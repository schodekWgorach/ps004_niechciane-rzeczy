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
                            Integer id felis ut lacus dignissim suscipit in ut quam. Sed
                            tempus et eros at imperdiet. Nulla facilisi. Integer suscipit
                            fringilla sapien pretium aliquam. Morbi eleifend lobortis nisi.
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