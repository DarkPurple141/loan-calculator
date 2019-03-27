import React, { Component } from 'react'
import { FieldTextStateless as TextField } from '@atlaskit/field-text'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { formatCurrency } from '../../utils'
import State, { getLoanCosts } from '../../store/selectors'
import * as loanActions from '../../store/loan/actions'
import LoanState from '../../store/loan/models';

import ContentSection from '../../components/ContentSection'

interface LoanProps extends LoanState {
    loanCosts: number
}

interface LoanDispatchers<T> {
    setLoan: (payload: T) => void
}

const mapStateToProps = ({ loan }: State): LoanProps => {
    return {
        ...loan,
        loanCosts: getLoanCosts(loan)
    }
}

const mapDispatchToProps = (dispatch: any): LoanDispatchers<ActionPayload> => {
    return bindActionCreators(loanActions, dispatch)
}

class LoanInfo extends Component<LoanProps & LoanDispatchers<ActionPayload>> {

    onChangeHandler = (key: string) => (e: any) => {    
        const value = Number(e.target.value)

        this.props.setLoan({
            key,
            value
        })
    }

    render() {
        const { rate, period, amount, loanCosts, repaymentFrequency } = this.props

        return (
            <ContentSection 
                header={
                    <h2>
                        Borrowing Costs <code>{ formatCurrency(loanCosts) } <em>({repaymentFrequency})</em></code>
                    </h2>
                }
            >
                <TextField type="number" label="Amount to borrow" value={amount} onChange={this.onChangeHandler('amount')}/>
                <TextField type="number" label="Annualised Rate (%)" value={rate} onChange={this.onChangeHandler('rate')}/>
                <TextField type="number" label="Loan Period (years)" value={period} onChange={this.onChangeHandler('period')}/>
            </ContentSection>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanInfo)