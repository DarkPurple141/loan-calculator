import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = ({ loan }) => {
    return {
        ...loan
    }
}

class LoanInfo extends Component {
    render() {
        return (
            <div className='LoanInfo'>
                <h1>Loan Info</h1>
                {Object.entries(this.props).map(([key, value]) => <p>{ key }: { value }</p>)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(LoanInfo)