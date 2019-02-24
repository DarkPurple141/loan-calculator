const initialState = {

}

const handlers = {

}

export default function (state = initialState, action: ReduxAction) {
    const { type } = action

    if (type in handlers)
        return handlers[type](state, action)

    return state
}