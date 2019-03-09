import { AnyAction } from 'redux';

export interface ReduxAction extends AnyAction {
    type: string,
    data: object
}
