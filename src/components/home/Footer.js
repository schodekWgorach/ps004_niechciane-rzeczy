import React, { Component } from "react";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";

class Footer extends Component {
    state = {};
    render() {
        return (
            <section className="footer">
                <div className="row">
                    <div className="col-7"></div>
                    <div className="col-2">
                        <p>Copyright by Coders Lab</p>
                    </div>
                    <div className="col-5"></div>
                    <div className="footerIcons col-1">
                        <div className="footerFacebook">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img
                                    className="footerLogo"
                                    src={facebook}
                                    alt={facebook}
                                />
                            </a>
                        </div>
                        <div className="footerInstagram">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <img
                                    className="footerLogo"
                                    src={instagram}
                                    alt={instagram}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </section>
        );
    }
}

export default Footer;