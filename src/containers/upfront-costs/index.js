import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        ...state
    }
}

class Costs extends Component {
    render() {
        return (
            <div className='Costs'>
                <h1>Costs</h1>
                {Object.keys(this.props).map(key => <p>{ key }</p>)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Costs)