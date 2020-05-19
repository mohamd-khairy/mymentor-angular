import { initialState } from './states.state';
import { Action } from '@ngrx/store';
import { ActionTypes } from './actions.action';

export class customAction{
    type: string
    payLoad: any
}

export function skillsAddReducer(state = initialState , action: customAction){

    switch (action.type) {
      
        case ActionTypes.LOADALL: 
                  
            return Object.assign({}, state, {
              loading: true,
            });
          
          break;

        case ActionTypes.LOAD: 
            
            return Object.assign({}, state, {
              loading: true,
            });
          
          break;

        case ActionTypes.ADD: 
        
            return Object.assign({}, state, {
              loading: true,
            });
          
          break;

        case ActionTypes.UPDATE: 
      
            return Object.assign({}, state, {
              loading: true,
            });
        
          break;
          
        case ActionTypes.DELETE: 
      
          return Object.assign({}, state, {
            loading: true,
          });
      
        break;

        case ActionTypes.SUCCESS:
            
            return {
              loading: false,
              data: action.payLoad
            }

          break;

        case ActionTypes.FAIL:
            return {
              loading: false,
              data: action.payLoad
            }
            
          break;

        default:
            return state
            break;
    }
}