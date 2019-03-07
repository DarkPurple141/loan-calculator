import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = ({ costs }) => {
    return {
        ...costs
    }
}

class Costs extends Component {
    render() {
        return (
            <div className='Costs'>
                <h2>Costs</h2>
                {Object.entries(this.props).map(([key, value]) => <p>{ key }: { value }</p>)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Costs)