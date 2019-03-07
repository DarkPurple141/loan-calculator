import React, { Component } from 'react'
import { connect } from 'react-redux';

import State, { getSummary } from '../../store/selectors';

const mapStateToProps = (store: State) => {

    return {
        position: getSummary(store)
    }
}

interface SummaryProps {
    position: number
}

class Summary extends Component<SummaryProps> {
    render() {
        return (
            <div className='Summary'>
                <h2>Summary</h2>       
                <p>position: { this.props.position }</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Summary)