import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import TextField from '@atlaskit/field-text'
import CloseIcon from '@atlaskit/icon/glyph/cross'
import AddIcon from '@atlaskit/icon/glyph/add'
import { FormSection } from '@atlaskit/form';
import LivingExpense from '../../components/LivingExpense'

import { connect } from 'react-redux'
import State, { getIncome } from '../../store/selectors'
import * as profileActions from '../../store/profile/actions'
import ProfileState from '../../store/profile/models'

interface ProfileDispatchers<T> {
    updateIncome: (payload: T) => void,
    updateExpenseLabel: (payload: T) => void,
    updateExpenseCost: (payload: T) => void,
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
        this.setState((state) => {
            this.props.addExpense({
                key: state.label,
                value: state.cost
            })
            return defaultState
        })
    }

    render() {
        const { incomeA, incomeB, livingExpenses, income } = this.props
        console.info(livingExpenses)
        return (
            <div className='profile'>  
                <h2>Profile <code>{ income }</code></h2>
                <TextField autoFocus type="number" label="Your Income" value={incomeA.value} onChange={this.onUpdateIncome('incomeA')}/>
                <TextField type="number" label="Your Partner's Income" value={incomeB.value} onChange={this.onUpdateIncome('incomeB')}/>
                <FormSection title="Living Expenses">
                    { livingExpenses && livingExpenses.map(props => (
                        <LivingExpense {...props}
                            key={props.id}
                            onEditText={this.props.updateExpenseLabel}
                            onEditNumber={this.props.updateExpenseCost} 
                            onClickIcon={this.props.deleteExpense} >
                            <CloseIcon size="medium" label="close" />
                        </LivingExpense>
                    ))}
                    <p>Add an expense</p>
                    <LivingExpense
                        key="Add Item"
                        cost={this.state.cost}
                        label={this.state.label}
                        onClickIcon={this.onButtonClick}
                        onEditText={({ key }: any) => this.setState({ label: key })}
                        onEditNumber={({ value }: any) => this.setState({ cost: value })}
                        textPlaceholder='Your expense name'
                        numberPlaceholder='$0'
                    >
                        <AddIcon size="medium" label="add"/>
                    </LivingExpense>
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