import React, { Component } from "react";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        nameValidation: true,
        emailValidation: true,
        messageValidation: true,
        formValidation: false
    };

    checkName = event => {
        this.setState({ name: event.target.value });
    };

    checkEmail = event => {
        this.setState({ email: event.target.value });
    };

    checkMessage = event => {
        this.setState({ message: event.target.value });
    };

    checkForm = event => {
        event.preventDefault();

        if (this.state.name.indexOf(" ") !== -1) {
            this.setState({ nameValidation: false });
        }

        if (this.state.name.length < 1) {
            this.setState({ nameValidation: false });
        }

        if (this.state.email.length < 7) {
            this.setState({ emailValidation: false });
        }

        if (this.state.email.indexOf("@") === -1) {
            this.setState({ emailValidation: false });
        }

        if (this.state.email.indexOf(" ") !== -1) {
            this.setState({ emailValidation: false });
        }

        if (this.state.message.length < 120) {
            this.setState({ messageValidation: false });
        }

        if (
            this.state.name.indexOf(" ") === -1 &&
            this.state.name.length >= 1 &&
            this.state.email.length >= 7 &&
            this.state.email.indexOf("@") !== -1 &&
            this.state.email.indexOf(" ") === -1 &&
            this.state.message.length >= 120
        ) {
            const { name, email, message } = this.state;
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({ formValidation: true });
                });
        }
    };

    render() {
        const success = (
            <>
                <h3 style={{ color: "green" }}>Wiadomość została wysłana!</h3>
                <h3 style={{ color: "green", marginBottom: "2rem" }}>
                    Wkrótce się skontaktujemy.
                </h3>
            </>
        );
        return (
            <section className="contact">
                <div className="row">
                    <div className="contactImg col-9"></div>
                    <div className="col-1"></div>
                    <div className="contactForm col-5">
                        <h3>Skontaktuj się z nami</h3>
                        <div className="decorationImage5"></div>
                        {this.state.formValidation ? success : null}
                        <form>
                            <div className="row">
                                <div className="col-8">
                                    <label>
                                        Wpisz swoje imię
                                        <input
                                            style={
                                                this.state.nameValidation
                                                    ? { borderBottom: "1px solid $color-grey" }
                                                    : { borderBottom: "1px solid red" }
                                            }
                                            type="name"
                                            placeholder="Krzysztof"
                                            value={this.state.name}
                                            onChange={this.checkName}
                                        />
                                        {this.state.nameValidation ? null : (
                                            <p style={{ color: "red" }}>
                                                Podane imię jest nieprawidłowe!
                                            </p>
                                        )}
                                    </label>
                                </div>
                                <div className="col-8">
                                    <label>
                                        Wpisz swój email
                                        <input
                                            style={
                                                this.state.emailValidation
                                                    ? { borderBottom: "1px solid $color-grey" }
                                                    : { borderBottom: "1px solid red" }
                                            }
                                            type="email"
                                            placeholder="abc@xyz.pl"
                                            value={this.state.email}
                                            onChange={this.checkEmail}
                                        />
                                        {this.state.nameValidation ? null : (
                                            <p style={{ color: "red", marginBottom: "1.5rem" }}>
                                                Podany email jest nieprawidłowy!
                                            </p>
                                        )}
                                    </label>
                                </div>
                                <div className="col-16">
                                    <label>
                                        Wpisz swoją wiadomość
                                        <textarea
                                            style={
                                                this.state.messageValidation
                                                    ? {
                                                        borderBottom: "1px solid $color-grey",
                                                        resize: "none"
                                                    }
                                                    : {
                                                        borderBottom: "1px solid rgba(255,0,0,1)",
                                                        resize: "none"
                                                    }
                                            }
                                            value={this.state.message}
                                            onChange={this.checkMessage}
                                            placeholder="Curabitur non gravida eros. Mauris placerat quis dui sed venenatis. Integer sapien lectus, mattis rhoncus eros a, fermentum dictum orci. Morbi at lacus est. Nulla facilisi. Nullam enim."
                                        />
                                        {this.state.messageValidation ? null : (
                                            <p style={{ color: "red", marginBottom: "1.5rem" }}>
                                                Wiadomość musi mieć co najmniej 120 znaków!
                                            </p>
                                        )}
                                    </label>
                                </div>
                                <div className="col-13"></div>
                                <div className="col-3">
                                    <input
                                        type="submit"
                                        value="Wyślij"
                                        onClick={this.checkForm}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-1"></div>
                </div>
            </section>
        );
    }
}

export default Contact;