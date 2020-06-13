import { ISkill } from '../states/states.state';
import { SkillActionsTypes } from '../actions/skillActions.action';

interface CustomAction {
    type: string,
    payload: any
}

export function SkillReducer(state: ISkill[], action: CustomAction) {
    switch (action.type) {
        case SkillActionsTypes.Success:
            return action.payload;
            break;

        case SkillActionsTypes.Fail:
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