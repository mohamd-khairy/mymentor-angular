import { CodeReviewInitialState, ICodeReviewInitialState } from './states.state';
import { CodeReviewActionTypes } from './actions.action';

interface CustomAction {
    type : string,
    payLoad : any
}

export function AddCodeReviewReducer(state: ICodeReviewInitialState = CodeReviewInitialState , action: CustomAction){

    switch (action.type) {

    case CodeReviewActionTypes.LOADAbout:

        return Object.assign({}, state, {
            loading: true,
        });
            
        break;
      
    case CodeReviewActionTypes.add: 
      
        return Object.assign({}, state, {
          loading: true,
        });
    
      break;
      

    case CodeReviewActionTypes.Success:
        
        return {
          loading: false,
          data: action.payLoad
        }

      break;

    case CodeReviewActionTypes.Fail:
        return {
          loading: false,
          data: action.payLoad
        }
        
      break;
    
        default:
            break;
    }
}