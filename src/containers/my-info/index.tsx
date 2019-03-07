import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';

import State from '../../store/selectors';
import { setProfile, updateExpense } from '../../store/profile/actions';
import ProfileState from '../../store/profile/models';

interface ProfileDispatchers {
    updateIncome: (key: string, value: number) => void,
    updateExpense: (key: string, cost: number) => void
}

interface FormState {
    label: string, 
    cost: number
}

const defaultState = {
    label: 'Your expense name',
    cost: 0
}

class MyInfo extends Component<ProfileState & ProfileDispatchers, FormState> {

    constructor(props: ProfileState & ProfileDispatchers) {
        super(props)
        this.state = defaultState
    }

    onUpdateIncome = (key: string) => (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = (event.target as any)
        this.props.updateIncome(key, value)
    }

    onUpdateExpense = (key: string, cost: number) => {
        this.props.updateExpense(key, cost)
    }

    onButtonClick = () => {
        this.setState(defaultState)
    }

    render() {
        const { incomeA, incomeB, livingExpenses } = this.props
        return (
            <div className='profile'>
                <h2>Profile</h2>
                <label>Your Income</label>
                <input type="number" name="incomeA" value={incomeA.value} onChange={this.onUpdateIncome('incomeA')}/>
                <label>Partner Income</label>
                <input type="number" name="incomeB" value={incomeB.value} onChange={this.onUpdateIncome('incomeB')}/>
                <hr/>
                <h2>Living Expenses</h2>
                { livingExpenses && livingExpenses.map(
                    ({ label, cost }) => 
                        <React.Fragment key={label}>
                            <label>{ label }</label>
                            <input type="number" name="rate" value={cost} onChange={(e: any) => this.onUpdateExpense(label, Number(e.target.value))}/> 
                        </React.Fragment>
                )}
                <p>Add an expense</p>
                <input type="text"   name="newLabel" value={this.state.label} placeholder={defaultState.label}  onChange={(e: any) => this.setState({ label: e.currentTarget.value })} />
                <input type="number" name="newCost"  value={this.state.cost} placeholder={`$${defaultState.cost}`} onChange={(e: any) => this.setState({ cost: e.currentTarget.value })}/> 
                <button onClick={this.onButtonClick}>Add</button>
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
        updateIncome: (key: string, value: number) => dispatch(
            setProfile({
                key,
                value
            })
        ),
        updateExpense: (key: string, value: number) => dispatch(
            updateExpense({
                key,
                value
            })
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInfo)