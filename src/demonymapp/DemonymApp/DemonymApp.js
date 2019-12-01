import React from 'react';
import './DemonymApp.css';
import Demonym from '../Demonym/Demonym';
import CountrySelector from '../CountrySelector/CountrySelector';

class DemonymApp extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            selected: null
        }
    }

    setSelected(selected) {
        this.setState({
            selected
        })
    }
    
    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
            .then(response => response.json())
            .then(data => {
                const countries = Object.keys(data)
                .map(key => data[key].item[0]);
                this.setState({
                    countries
                })
            });
      }
    
    render() {
        
        const demon = this.state.selected
        ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
        : <div className="demonym_app__placeholder">Select a country above</div>;
        
        return (
            <div className="demonym_app">
                <CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]} changeHandler={selected => this.setSelected(selected)}/>
                {demon}
            </div>
        )
    }
}

export default DemonymApp;