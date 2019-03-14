import { AnyAction } from 'redux';

declare global {
    interface ReduxAction extends AnyAction {
        data: object
    }
}

declare module '@atlaskit/*';