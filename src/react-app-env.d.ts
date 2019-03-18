/// <reference types="react-scripts" />

// action creators
declare interface ActionPayload {
    value: number,
    key: string,
    id?: string
}

declare type Period = 'Weekly' | 'Fortnightly' | 'Monthly' | 'Yearly'

declare module '@atlaskit/*';