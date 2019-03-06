import React from 'react'
import LoanInfo from './loan-info'
import MyInfo from './my-info'
import UpfrontCosts from './upfront-costs'
import Summary from './summary'

const App = () => (
  <div>
    <h1>How much can I afford?</h1>
    <LoanInfo />
    <MyInfo />
    <UpfrontCosts />
    <Summary />
  </div>
)

export default App;
