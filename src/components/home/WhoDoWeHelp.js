import React, {Component} from "react";
import decoration from '../../assets/Decoration.svg';
import data from '../../assets/fundacje.json';

let organizacje = data.organizations;

class WhoWeHelp extends Component {
    state = {
        typeOfOrganization: 0,
        page: 1
    };

    organizationButtonHandler = (e, num) => {
        this.setState({
            typeOfOrganization: num,
            page: 1
        });
    };
    pagesButtonHandler = (e, num) => {
        this.setState({
            page: num
        });
    };

    render() {
        let actualOrganizations = organizacje[this.state.typeOfOrganization];
        let foundations = actualOrganizations.foundations;
        let actualFoundations = [];
        let numberOfPages = (foundations.length%3===0) ? foundations.length/3 : (Math.floor(foundations.length/3))+1;
        let pages = [];
        if(numberOfPages>1) {
            for (let i = 0; i < numberOfPages; i++) {
                pages[i] = i + 1;
            }
        }
        for(let i=0; i<3; i++){
            actualFoundations[i] = foundations[(this.state.page - 1)+i];
        }
        return (
            <div className='flex-box whoWeHelp_Container'>
                <section className='whoWeHelp flex-box' id='HomeWhoWeHelp'>
                    <h1>Komu pomagamy?</h1>
                    <img src={decoration}/>
                    <div className='typesOfSupports flex-box'>
                        {organizacje.map((el, i) => (
                            <button onClick={e => this.organizationButtonHandler(e, i)}className={ this.state.typeOfOrganization === i ? 'activeButton': '' }>{el.navName}</button>))}
                    </div>
                    <p>{actualOrganizations.description}</p>
                    <div className='organizations'>
                        {actualFoundations.map((el, i) => (
                            <div className='organization flex-box'>
                                <div>
                                    <h2>{el.name}</h2>
                                    <p>{el.mission}</p>
                                </div>
                                <div>
                                    <p>{el.things}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='pageNumbers'>
                        {pages.map(el => <button onClick={e => this.pagesButtonHandler(e, el)} className={ this.state.page === el ? 'activeButton': '' }>{el}</button>)}
                    </div>
                </section>
            </div>
        );
    }
}

export default WhoWeHelp;