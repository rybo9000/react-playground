import React, { Component } from 'react';
import Currency from './Currency.js';
import CurrencyError from './CurrencyError';

class App extends Component {
  render() {
    return (
      <div className="App">
            <CurrencyError>
                Germany: <Currency value={21} locale="de-DE" currency="US"/>
                USA: <Currency value={21} locale="en-US" currency="USD"/>
            </CurrencyError>
      </div>
    );
  }
}

export default App;