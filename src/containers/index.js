import React, { Component } from 'react'
import LoanInfo from './loan-info'
import MyInfo from './my-info'
import UpfrontCosts from './upfront-costs'

class App extends Component {
  render() {
    return (
        <div>
            <LoanInfo />
            <MyInfo />
            <UpfrontCosts />
        </div>
      
    );
  }
}

export default App;
