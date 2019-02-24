class LoanCalculator {
    period: number
    rate  : number
    amount: number

    constructor(period: number, rate: number, amount: number) {
        this.period = period
        this.rate = rate
        this.amount = amount
    }

    get monthlyRepayments(): number {
        const effectiveRate = this.rate
        return 0;
    }
}

export default LoanCalculator