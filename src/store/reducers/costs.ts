const initialState = {
    conveyancing: 1500,
    bankFees: 500,
    renovations: 0,
    stampDuty: 0
}

const handlers = {
    
}

export default function (state = initialState, action: ReduxAction) {
    const { type } = action

    if (type in handlers)
        return handlers[type](state, action)

    return state
}