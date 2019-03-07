/// <reference types="react-scripts" />

// action creators
declare interface ActionPayload {
    value: number | string,
    key: string
}

declare interface ReduxAction {
    type: string,
    data: object
}
