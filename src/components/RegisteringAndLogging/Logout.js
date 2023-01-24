import React, { Component } from "react";
import Navigation from "../Home/Navigation";
import Logging from "../Home/Logging";
import { Link } from "react-router-dom";

class Logout extends Component {
    state = {};
    render() {
        return (
            <section className="logout">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-10">
                        <Logging />
                        <Navigation />
                    </div>
                </div>
                <div className="logoutDiv">
                    <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                    <div className="decorationImage8"></div>
                    <div className="logoutButton">
                        <button>
                            <Link to="/">Strona główna</Link>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Logout;