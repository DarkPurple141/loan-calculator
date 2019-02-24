import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        ...state
    }
}

class LoanInfo extends Component {
    render() {
        return (
            <div className='LoanInfo'>
                <h1>Loan Info</h1>
                {Object.keys(this.props).map(key => <p>{ key }</p>)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(LoanInfo)