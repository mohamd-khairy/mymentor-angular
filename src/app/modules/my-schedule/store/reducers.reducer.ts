import { scheduleInitialState, IscheduleInitialState } from './states.state';
import { scheduleActionTypes } from './actions.action';

interface CustomAction {
    type : string,
    payLoad : any
}

export function AddscheduleReducer(state: IscheduleInitialState = scheduleInitialState , action: CustomAction){

    switch (action.type) {
        case scheduleActionTypes.add: 
      
        return Object.assign({}, state, {
          loading: true,
        });
    
      break;
      

    case scheduleActionTypes.Success:
        
        return {
          loading: false,
          data: action.payLoad
        }

      break;

    case scheduleActionTypes.Fail:
        return {
          loading: false,
          data: action.payLoad
        }
        
      break;
    
        default:
            break;
    }
}