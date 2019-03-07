import React from 'react'
import LoanInfo from './loan-info'
import MyInfo from './my-info'
import UpfrontCosts from './upfront-costs'
import Summary from './summary'

const App = () => (
  <main>
    <h1>How much can I afford?</h1>
    <p>People often tackle this sort of thing upside down; trying to find additional money to stretch themselves rather than making a realistic estimate of what they can truly afford. This tool tries to properly quantify that to help you avoid unnecessary financial stress and to provide a better overview of what sort of property price you should be targeting.</p>
    <MyInfo />
    <LoanInfo />
    <UpfrontCosts />
    <Summary />
  </main>
)

export default App;
