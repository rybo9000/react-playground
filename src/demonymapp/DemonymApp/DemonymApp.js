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
            selected: selected
        })
    }
    
    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
            .then(response => response.json())
            .then(data => {
                const countries = Object.keys(data)
                .map(key => data[key].item[0]);
                
                this.setState({
                    countries: countries,
                    error: null
                })
            })
            .catch(err => {
                this.setState({
                    error: err.message
                  });
            })
      }
    
    render() {
        
        const demon = this.state.selected
        ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
        : <div className="demonym_app__placeholder">Select a country above</div>;

        const error = this.state.error
        ? <div className="demonym_app__error">{this.state.error}</div>
        : "";
        
        return (
            <div className="demonym_app">
                {error}
                <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)}/>
                {demon}
            </div>
        )
    }
}

export default DemonymApp;