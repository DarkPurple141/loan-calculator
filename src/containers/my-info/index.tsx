import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import TextField from '@atlaskit/field-text'
import CrossIcon from '@atlaskit/icon/glyph/cross'
import InlineContainer from '../../components/InlineContainer'
import { connect } from 'react-redux'
import State, { getIncome } from '../../store/selectors'
import * as profileActions from '../../store/profile/actions'
import ProfileState from '../../store/profile/models'

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

type IProps = ProfileState & ProfileDispatchers<ActionPayload> & { income: number}

class MyInfo extends Component<IProps, FormState> {

    constructor(props: IProps) {
        super(props)
        this.state = defaultState
    }

    onUpdateIncome = (key: string) => (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = (event.target as any)
        this.props.updateIncome({key, value: Number(value)})
    }

    onButtonClick = () => {
        this.props.addExpense({
            key: this.state.label,
            value: this.state.cost
        })
        this.setState(defaultState)
    }

    render() {
        const { incomeA, incomeB, livingExpenses, income } = this.props
        return (
            <div className='profile'>
                
                <h2>Profile <code>{ income }</code></h2>
                <TextField autoFocus type="number" label="Your Income" value={incomeA.value} onChange={this.onUpdateIncome('incomeA')}/>
                <TextField type="number" label="Your Partner's Income" value={incomeB.value} onChange={this.onUpdateIncome('incomeB')}/>
                <hr/>
                <h2>Living Expenses</h2>
                { livingExpenses && livingExpenses.map(
                    ({ label, cost }) => 
                        <InlineContainer key={label}>
                            <TextField type="number" label={label} value={cost} onChange={(e: any) => this.props.updateExpense({ key: label, value: Number(e.target.value) })}/>
                            <CrossIcon label="close" onClick={() => this.props.deleteExpense({ key: label })}></CrossIcon>
                        </InlineContainer>
                )}
                <p>Add an expense</p>
                <input type="text"   name="newLabel" value={this.state.label} placeholder='Your expense name'  onChange={(e: any) => this.setState({ label: e.currentTarget.value })} />
                <input type="number" name="newCost"  value={undefined && this.state.cost} placeholder={`$0`} onChange={(e: any) => this.setState({ cost: Number(e.currentTarget.value) })}/> 
                <button onClick={this.onButtonClick}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = ({ profile }: State): ProfileState & { income: number } => {
    return {
        ...profile,
        income: getIncome(profile)
    }
}

const mapDispatchToProps = (dispatch: any): ProfileDispatchers<ActionPayload> => {
    return bindActionCreators(profileActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInfo)