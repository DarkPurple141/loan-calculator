interface PurchaseCosts {
    /* standard bank rubber stamp */
    bankFees: number,
    /* additional/required repairs */
    renovations: number,
    /* NSW gov */
    stampDuty: number,
    /* lawyer purchase processing costs */
    conveyancing: number,
}

const initialState: PurchaseCosts = {
    conveyancing: 1500,
    bankFees: 500,
    renovations: 0,
    stampDuty: 0
}

export default function (state = initialState, action: ReduxAction) {
    const { type } = action

    switch (type) {
        default: return state
    }
}