import { ChatInitialState, IChatInitialState } from './states.state';
import { ChatActionTypes } from './actions.action';

interface CustomAction {
    type : string,
    payLoad : any
}

export function ChatReducer(state: IChatInitialState = ChatInitialState , action: CustomAction){

    switch (action.type) {

    case ChatActionTypes.loadUser:

        return Object.assign({}, state, {
            loading: true,
        });
            
        break;
 

    case ChatActionTypes.Success:
        
        return {
          loading: false,
          data: action.payLoad
        }

      break;

    case ChatActionTypes.Fail:
        return {
          loading: false,
          data: action.payLoad
        }
        
      break;
    
        default:
            break;
    }
}