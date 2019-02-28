import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        ...state.profile
    }
}

class MyInfo extends Component {
    render() {
        return (
            <div className='Profile'>
                <h1>Profile</h1>
                {Object.keys(this.props).map(key => <p>{ key }</p>)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MyInfo)