import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const options = {
    duration: 500,
    activeClass: "active"
};
class Navigation extends Component {
    state = {};
    render() {
        return (
            <section className="navigation">
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-10">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Start</Link>
                                </li>
                                <li>
                                    <ScrollLink to="fourSteps" {...options}>
                                        O co chodzi?
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="aboutUs" {...options}>
                                        O nas
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="whoDoWeHelp" {...options}>
                                        Fundacja i organizacje
                                    </ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink to="contact" {...options}>
                                        Kontakt
                                    </ScrollLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}

export default Navigation;