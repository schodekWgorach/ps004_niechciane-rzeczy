import React, { Component } from "react";
import Navigation from "../home/Navigation";
import Logging from "../home/Logging";
import { Link } from "react-router-dom";

class Register extends Component {

    state = {
        email: "",
        password: "",
        password2: "",
        emailValidation: true,
        passwordValidation: true,
        password2Validation: true,
        formValidation: false
    };

    checkEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    checkPassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    checkPassword2 = event => {
        this.setState({
            password2: event.target.value
        });
    };

    checkForm = event => {
        if (this.state.email.length < 7) {
            this.setState({ emailValidation: false });
        }

        if (this.state.email.indexOf("@") === -1) {
            this.setState({ emailValidation: false });
        }

        if (this.state.email.indexOf(" ") !== -1) {
            this.setState({ emailValidation: false });
        }

        if (this.state.password.length < 6) {
            this.setState({ passwordValidation: false });
        }

        if (this.state.password !== this.state.password2) {
            this.setState({ password2Validation: false });
        }

        if (
            this.state.email.length >= 7 &&
            this.state.email.indexOf("@") !== -1 &&
            this.state.email.indexOf(" ") === -1 &&
            this.state.password.length >= 6 &&
            this.state.password === this.state.password2
        ) {
            this.setState({ formValidation: true });
        }

        event.preventDefault();
    };

    render() {
        return (
            <section className="register">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-10">
                        <Logging />
                        <Navigation />
                    </div>
                </div>
                <div className="registerDiv">
                    <h1>Za?????? konto</h1>
                    <div className="decorationImage7"></div>
                    <div className="registerForm">
                        <form>
                            <label>
                                Email
                                <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.checkEmail}
                                    style={
                                        this.state.emailValidation
                                            ? { borderBottom: "1px solid $color-black" }
                                            : { borderBottom: "1px solid red" }
                                    }
                                />
                                {this.state.emailValidation ? null : (
                                    <p style={{ color: "red" }}>
                                        Podany email jest nieprawid??owy!
                                    </p>
                                )}
                            </label>
                            <label>
                                Has??o
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.checkPassword}
                                    style={
                                        this.state.passwordValidation
                                            ? { borderBottom: "1px solid $color-black" }
                                            : { borderBottom: "1px solid red" }
                                    }
                                />
                                {this.state.passwordValidation ? null : (
                                    <p style={{ color: "red" }}>Podane has??o jest za kr??tkie!</p>
                                )}
                            </label>
                            <label>
                                Powt??rz has??o
                                <input
                                    type="password"
                                    value={this.state.password2}
                                    onChange={this.checkPassword2}
                                    style={
                                        this.state.password2Validation
                                            ? { borderBottom: "1px solid $color-black" }
                                            : { borderBottom: "1px solid red" }
                                    }
                                />
                                {this.state.password2Validation ? null : (
                                    <p style={{ color: "red" }}>Niepoprawnie powt??rzone has??o!</p>
                                )}
                            </label>
                        </form>
                    </div>
                    <div className="registerButtons">
                        <button>
                            <Link to="/logowanie">Zaloguj si??</Link>
                        </button>
                        <button onClick={this.checkForm}>
                           <Link to="/rejestracja">
                            Za?????? konto
                          </Link>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;
