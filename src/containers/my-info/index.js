import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = ({ profile }) => {
    return {
        ...profile
    }
}

class MyInfo extends Component {
    render() {
        return (
            <div className='Profile'>
                <h1>Profile</h1>
                {Object.entries(this.props).map(([key, value]) => <p>{ key }: { value }</p>)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MyInfo)