import React, { Component, Dispatch } from 'react'
import { bindActionCreators, AnyAction } from 'redux'
import { connect } from 'react-redux';

import State from '../../store/selectors';
import * as profileActions from '../../store/profile/actions';
import ProfileState from '../../store/profile/models';

interface ProfileDispatchers<T> {
    updateIncome: (payload: T) => void,
    updateExpense: (payload: T) => void,
    addExpense: (payload: T) => void,
    deleteExpense: (payload: T) => void
}

interface FormState {
    label: string, 
    cost: number
}

const defaultState = {
    label: '',
    cost: 0
}

class MyInfo extends Component<ProfileState & ProfileDispatchers<ActionPayload>, FormState> {

    constructor(props: ProfileState & ProfileDispatchers<ActionPayload>) {
        super(props)
        this.state = defaultState
    }

    onUpdateIncome = (key: string) => (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = (event.target as any)
        this.props.updateIncome({key, value})
    }

    onUpdateExpense = (key: string, value: number) => {
        this.props.updateExpense({key, value})
    }

    onButtonClick = () => {
        this.props.addExpense({
            key: this.state.label,
            value: this.state.cost
        })
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
                            <button onClick={() => this.props.deleteExpense({ key: label })}>X</button>
                        </React.Fragment>
                )}
                <p>Add an expense</p>
                <input type="text"   name="newLabel" value={this.state.label} placeholder='Your expense name'  onChange={(e: any) => this.setState({ label: e.currentTarget.value })} />
                <input type="number" name="newCost"  value={undefined && this.state.cost} placeholder={`$0`} onChange={(e: any) => this.setState({ cost: Number(e.currentTarget.value) })}/> 
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

const mapDispatchToProps = (dispatch: any): ProfileDispatchers<ActionPayload> => {
    return bindActionCreators(profileActions, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(MyInfo)