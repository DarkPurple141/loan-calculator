import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';
import State from '../../store/selectors';
import { setLoan } from '../../store/loan/actions'
import { REPAYMENT_FREQUENCY, LoanActionPayload } from '../../store/loan/models';

interface LoanProps {
    rate: number,
    period: number,
    repayments: REPAYMENT_FREQUENCY,
    borrowing: number,
}

interface LoanActions {
    updateLoan: Function
}

const mapStateToProps = ({ loan }: State): LoanProps => {
    return {
        rate: loan.rate,
        period: loan.period,
        repayments: loan.repaymentFrequency,
        borrowing: loan.amount
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>): LoanActions => {
    return {
        updateLoan: (payload: LoanActionPayload) => dispatch(
            setLoan(payload)
        )
    }
}

class LoanInfo extends Component<LoanProps & LoanActions> {

    onChangeHandler = (key: string) => (e: React.FormEvent<HTMLInputElement>): void => {    
        const input = e.target as any

        this.props.updateLoan({
            key,
            value: Number(input.value)
        })
    }

    render() {
        const { rate, period, borrowing } = this.props
        console.info(this.props)
        return (
            <div className='LoanInfo'>
                <h1>Loan Info</h1>
                <label>Amount to borrow</label>
                <input type="number" name="amount" value={borrowing} onChange={this.onChangeHandler('amount')}/>
                <label>Rate</label>
                <input type="number" name="rate"   value={rate} onChange={this.onChangeHandler('rate')}/>
                <label>Loan Period (years)</label>
                <input type="number" name="period" value={period} onChange={this.onChangeHandler('period')}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanInfo)