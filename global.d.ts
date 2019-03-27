import { AnyAction } from 'redux';

declare global {
    interface ReduxAction extends AnyAction {
        data: {
            key: string,
            value?: number,
            readonly id?: string 
        }
    }
}

declare module '@atlaskit/*';