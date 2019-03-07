import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';

import State from '../../store/selectors';
import { setProfile } from '../../store/profile/actions';
import ProfileState from '../../store/profile/models';

interface ProfileDispatchers {
    updateIncome: (value: number) => void,
}

class MyInfo extends Component<ProfileState & ProfileDispatchers> {

    onUpdateIncome = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = (event.target as any)
        
        this.props.updateIncome(value)
    }

    render() {
        const { income, livingExpenses } = this.props
        return (
            <div className='Profile'>
                <h1>Profile</h1>
                <label>Current Annual Income</label>
                <input type="number" name="income" value={income} onChange={this.onUpdateIncome}/>
                <label>Living Expenses</label>
                { livingExpenses && livingExpenses.map(
                    ({ label, cost }) => 
                        <React.Fragment key={label}>
                            <label>{ label }</label>
                            <input type="number" name="rate" value={cost} /> 
                        </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = ({ profile }: State): ProfileState => {
    return {
        ...profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>): ProfileDispatchers => {
    return {
        updateIncome: (value: number) => dispatch(
            setProfile({
                key: 'income',
                value
            })
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInfo)