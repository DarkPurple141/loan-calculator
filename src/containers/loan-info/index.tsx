import React, { Component } from 'react'
import { connect } from 'react-redux';

import { AppStore } from '../../store/root';

const mapStateToProps = ({ loan }: AppStore) => {
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