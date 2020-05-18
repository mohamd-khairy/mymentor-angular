import {IinitialAboutState , initialAboutState} from './states.state'
import { AboutActionsTypes } from './actions.action';

interface CustomAction{
    type: string,
    payLoad: any
}

export function AboutReducer(state: IinitialAboutState = initialAboutState , action: CustomAction){

    switch (action.type) {
        case AboutActionsTypes.LOADLanguages:

            return Object.assign({}, state, {
                loading: true,
            });

            break;

        case AboutActionsTypes.LOADDays:

            return Object.assign({}, state, {
                loading: true,
            });
                
            break;   

        case AboutActionsTypes.ADD: 
        
            return Object.assign({}, state, {
              loading: true,
            });
          
          break;

        case AboutActionsTypes.UPDATE: 
      
            return Object.assign({}, state, {
              loading: true,
            });
        
          break;
          
        case AboutActionsTypes.DELETE: 
      
            return Object.assign({}, state, {
                loading: true,
            });
        
            break;

        case AboutActionsTypes.SUCCESS:

            return Object.assign({}, state, {
                loading: false,
                data: action.payLoad
            });
            
            break;

        case AboutActionsTypes.FAIL:

            return Object.assign({}, state, {
                loading: false,
                errors: action.payLoad
            });
                
            break;

        default:
            break;
    }
}