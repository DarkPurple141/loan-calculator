enum REPAYMENT_TYPE {
    INTEREST_ONLY = 'Interest only',
    PRINCIPAL_AND_INTEREST = 'Principle and interest'
}

enum REPAYMENT_FREQUENCY {
    WEEKLY = 'weekly',
    FORTNIGHTLY = 'fortnightly',
    MONTHLY = 'monthly',
}

interface LoanState {
    /* borrowing amount */
    amount: number,
    /* eg 30 years */
    period: number,
    /* as defined */
    repaymentType: REPAYMENT_TYPE,
    /* repayment frequency */
    repaymentFrequency: REPAYMENT_FREQUENCY,
    /* interest rate */
    rate: number,
}

const initialState: LoanState = {
    amount: 0,
    period: 0,
    repaymentType: REPAYMENT_TYPE.PRINCIPAL_AND_INTEREST,
    repaymentFrequency: REPAYMENT_FREQUENCY.FORTNIGHTLY,
    rate: 0,
}

const handlers = {
    method: () => {}
}

export default function (state = initialState, action: ReduxAction) {
    const { type } = action

    if (type in handlers)
        return handlers[type](state, action)

    return state
}