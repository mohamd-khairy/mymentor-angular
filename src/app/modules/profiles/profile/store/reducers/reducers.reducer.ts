import { IEducationState } from '../states/states.state';
import { ActionsTypes } from '../actions/educationActions.action';

interface CustomAction {
    type: string,
    payload: any
}

export function educationReducer(state: IEducationState[], action: CustomAction) {
    switch (action.type) {
        case ActionsTypes.ResponseSuccess:
            return action.payload;

            break;
        case ActionsTypes.ResponseFail:
            let error;
            if (action.payload.status == 400) {
                error = action.payload.error.message;
            }
            if (action.payload.status == 401) {
                error = action.payload.error.message;
            }
            if (action.payload.status == 422) {
                error = action.payload.error.errors[Object.keys(action.payload.error.errors)[0]][0];
            }

            return [];

            break;

        default:
            return state;
            break;
    }
}