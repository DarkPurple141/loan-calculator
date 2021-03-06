import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatCurrency } from '../../utils'

import State, { getSummary } from '../../store/selectors'

const mapStateToProps = (store: State) => ({
    position: getSummary(store)
})

interface SummaryProps {
    position: number
}

class Summary extends Component<SummaryProps> {

    render() {
        return (
            <div className='Summary'>
                <h2>Summary <code>{ formatCurrency(this.props.position) }</code></h2>       
            </div>
        )
    }
}

export default connect(mapStateToProps)(Summary)