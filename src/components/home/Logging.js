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
                        <Link to="/Logging">Zaloguj</Link>
                    </button>
                    <button>
                        <Link to="/Register">Załóż konto</Link>
                    </button>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}

export default Logging;