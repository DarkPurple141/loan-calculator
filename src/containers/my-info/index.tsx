import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import TextField from '@atlaskit/field-text'
import AddIcon from '@atlaskit/icon/glyph/add'
import { FormSection } from '@atlaskit/form';

import InlineContainer from '../../components/InlineContainer'
import IconContainer from '../../components/IconContainer'
import LivingExpense from '../../components/LivingExpense'

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
                <FormSection title="Living Expenses">
                    { livingExpenses && livingExpenses.map(props => (
                        <LivingExpense {...props} onUpdateExpense={this.props.updateExpense} onDeleteExpense={this.props.deleteExpense} />
                    ))}
                    <p>Add an expense</p>
                    <InlineContainer>
                        <TextField isLabelHidden type="text" label="" value={this.state.label} laceholder='Your expense name'  onChange={(e: any) => this.setState({ label: e.currentTarget.value })}/> 
                        <TextField isLabelHidden type="number" label="" value={undefined && this.state.cost} placeholder='$0' onChange={(e: any) => this.setState({ cost: Number(e.currentTarget.value) })}/>
                        <IconContainer onClick={this.onButtonClick}>
                            <AddIcon size="medium" label="add"/>
                        </IconContainer>
                        
                    </InlineContainer>
                </FormSection>
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