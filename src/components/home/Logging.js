import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logging extends Component {
    state = {};
    render() {
        return (
            <div className="row">
                <div className="col-10"></div>
                <div className="loggingButtons col-5">
                    <button>
                        <p> text</p>
                        <Link to="/logowanie">Zaloguj</Link>
                    </button>
                    <button>
                        <p>text 2</p>
                        <Link to="/rejestracja">Załóż konto</Link>
                    </button>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}

export default Logging;