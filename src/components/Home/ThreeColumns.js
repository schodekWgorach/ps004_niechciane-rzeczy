import React, { Component } from "react";

class ThreeColumns extends Component {
    state = {};
    render() {
        return (
            <div className="row threeColumns">
                <div className="col-1"></div>
                <div className="col-4">
                    <div className="columnInformation">
                        <h1>10</h1>
                        <h5>oddanych worków</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
                            dolor est. Curabitur tempus felis.
                        </p>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                    <div className="columnInformation">
                        <h1>5</h1>
                        <h5>wspartych organizacji</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
                            dolor est. Curabitur tempus felis.
                        </p>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                    <div className="columnInformation">
                        <h1>7</h1>
                        <h5>zorganizowanych zbiórek</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
                            dolor est. Curabitur tempus felis.
                        </p>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}

export default ThreeColumns;