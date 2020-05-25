import { createReducer } from "@ngrx/store";
import { ReviewInitialState, IReviewInitialState } from './states.state';
import { reviewActionTypes } from './actions.action';

interface CustomAction {
    type : string,
    payLoad : any
}

export function AddReviewReducer(state: IReviewInitialState = ReviewInitialState , action: CustomAction){

    switch (action.type) {
        case reviewActionTypes.add: 
      
        return Object.assign({}, state, {
          loading: true,
        });
    
      break;
      

    case reviewActionTypes.Success:
        
        return {
          loading: false,
          data: action.payLoad
        }

      break;

    case reviewActionTypes.Fail:
        return {
          loading: false,
          data: action.payLoad
        }
        
      break;
    
        default:
            break;
    }
}