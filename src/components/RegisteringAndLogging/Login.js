import React, { Component } from "react";
import Navigation from "../home/Navigation";
import Logging from "../home/Logging";
import { Link } from "react-router-dom";
class Login extends Component {
    state = {
        email: "",
        password: "",
        emailValidation: true,
        passwordValidation: true,
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

        if (
            this.state.email.length >= 7 &&
            this.state.email.indexOf("@") !== -1 &&
            this.state.email.indexOf(" ") === -1 &&
            this.state.password.length >= 6
        ) {
            this.setState({ formValidation: true });
        }

        event.preventDefault();
    };

    render() {
        return (
            <section className="login">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-10">
                        <Logging />
                        <Navigation />
                    </div>
                </div>
                <div className="loginDiv">
                    <h1>Zaloguj się</h1>
                    <div className="decorationImage6"></div>
                    <div className="loginForm">
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
                                        Podany email jest nieprawidłowy!
                                    </p>
                                )}
                            </label>
                            <label>
                                Hasło
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
                                    <p style={{ color: "red" }}>Podane hasło jest za krótkie!</p>
                                )}
                            </label>
                        </form>
                    </div>
                    <div className="loginButtons">
                        <button>
                            <Link to="/Register">Załóż konto</Link>
                        </button>
                        <button onClick={this.checkForm}>
                            {/* <Link to="/logowanie"> */}
                            Zaloguj się
                            {/* </Link> */}
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;