import { AnyAction } from 'redux';

declare global {
    interface ReduxAction extends AnyAction {
        data: object
    }
}
