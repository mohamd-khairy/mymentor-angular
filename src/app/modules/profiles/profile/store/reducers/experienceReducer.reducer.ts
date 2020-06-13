import { IExperienceState } from '../states/states.state';
import { ActionTypes } from '../actions/experienceActions.action';

interface CustomAction {
    type: string,
    payload: any
}

export function ExperienceReducer(state: IExperienceState[], action: CustomAction) {
    switch (action.type) {
        case ActionTypes.ResponseSuccessEx:
            return action.payload;
            break;

        case ActionTypes.ResponseFailEx:
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
            break;
    }
}