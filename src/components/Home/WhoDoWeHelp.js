import React, { Component } from "react";

class WhoDoWeHelp extends Component {
    state = {
        fundations: [],
        currentOrganisation: 1,
        currentPage: 0,
        itemPerPage: 3
    };


    componentDidMount() {
        const url = "https://api.jsonbin.io------";
        return fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then(fundations => {
                this.setState({ fundations });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleOnClick = e => {
        this.setState({ currentOrganisation: e.target.id, currentPage: 0 });
    };

    handleButtonClick = e => {
        this.setState({ currentPage: e.target.id - 1 });
    };

    get names() {
        return this.state.fundations.map(fundation => {
            return (
                <>
                    <li
                        key={fundation.id}
                        id={fundation.id}
                        onClick={this.handleOnClick}
                        className={
                            this.state.currentOrganisation == fundation.id ? "active" : null
                        }
                    >
                        {fundation.name}
                    </li>
                </>
            );
        });
    }

    get items() {
        return this.state.fundations.find(
            fundation => fundation.id == this.state.currentOrganisation
        );
    }

    get fundations() {
        console.log(this.items);
        const { currentPage, itemPerPage } = this.state;
        return this.items?.items?.length
            ? this.items.items.slice(
                currentPage * itemPerPage,
                currentPage * itemPerPage + itemPerPage
            )
            : [];
    }

    get pages() {
        return Math.ceil(this.items?.items?.length / this.state.itemPerPage);
    }

    render() {
        console.log(this.pages);

        let allPages = [];

        for (var i = 1; i <= this.pages; i++) {
            allPages.push(i);
        }

        let showPages = allPages.map(el => {
            return (
                <button
                    key={el}
                    id={el}
                    onClick={this.handleButtonClick}
                    className={
                        this.state.currentPage == el - 1
                            ? "activeButton"
                            : "showPagesButton"
                    }
                >
                    {el}
                </button>
            );
        });

        console.log(this.items);
        return (
            <section className="whoDoWeHelp">
                <div className="whoDoWeHelpHeadline">
                    <h1>Komu pomagamy?</h1>
                </div>
                <div className="decorationImage4"></div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="whoDoWeHelpNav col-8">
                        <ul>{this.names}</ul>
                    </div>
                    <div className="col-4"></div>

                    <div className="col-5"></div>
                    <div className="whoDoWeHelpDescription col-6">
                        {this.state.fundations[this.state.currentOrganisation - 1]?.desc}
                    </div>
                    <div className="col-5"></div>

                    <div className="col-3"></div>
                    <div className="whoDoWeHelpList col-10">
                        <div>
                            {this.fundations.map(fundation => (
                                <div key={fundation.header} className="fundationMain row">
                                    <div className="fundationHeader col-7">
                                        {fundation.header}
                                    </div>
                                    <div className="col-6"></div>
                                    <div className="fundationDesc col-3">{fundation.desc}</div>
                                    <div className="fundationSubheader col-7">
                                        {fundation.subheader}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-5"></div>
                    <div className="showPages col-6">{showPages}</div>
                    <div className="col-5"></div>
                </div>
            </section>
        );
    }
}

export default WhoDoWeHelp;