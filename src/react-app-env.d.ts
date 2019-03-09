/// <reference types="react-scripts" />

// action creators
declare interface ActionPayload {
    value?: number | string,
    key: string
}

declare type Period = 'Weekly' | 'Fortnightly' | 'Monthly' | 'Yearly'