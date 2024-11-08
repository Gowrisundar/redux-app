import React from 'react'
import './BankApp.css'
import Bank from './containers/Bank'
import Deposits from './containers/Deposits'
import Withdraw from './containers/Withdraw'

const BankApp = () => {
  return (
    <div className="container ">
        <h2 className="bg-danger text-light">Murthy's Corporate Bank</h2>
        <Bank/>
        <br/>
        <Deposits/>
        <br/>
        <Withdraw/>

    </div>
  )
}

export default BankApp