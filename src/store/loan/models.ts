export default interface LoanState {
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

export enum REPAYMENT_TYPE {
    INTEREST_ONLY = 'Interest only',
    PRINCIPAL_AND_INTEREST = 'Principle and interest'
}

export enum REPAYMENT_FREQUENCY {
    WEEKLY = 'weekly',
    FORTNIGHTLY = 'fortnightly',
    MONTHLY = 'monthly',
}
