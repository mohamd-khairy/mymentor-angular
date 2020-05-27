import { RequestInitialState, IRequestInitialState } from './states.state';
import { RequestActionTypes } from './actions.action';

interface CustomAction {
    type : string,
    payLoad : any
}

export function changeStatusRequestReducer(state: IRequestInitialState = RequestInitialState , action: CustomAction){

    switch (action.type) {

    case RequestActionTypes.changesStatus:

        return Object.assign({}, state, {
            loading: true,
        });
            
        break;
 

    case RequestActionTypes.Success:
        
        return {
          loading: false,
          data: action.payLoad
        }

      break;

    case RequestActionTypes.Fail:
        return {
          loading: false,
          data: action.payLoad
        }
        
      break;
    
        default:
            break;
    }
}