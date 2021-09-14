import * as constants from '../constants/index';

const counter = (state = 0,action)=>{
    switch(action.type){
        case constants.INCREMENT:
            return state + action.num;
        case constants.DECREMENT:
            return state - action.num;
        default:
            return state;
    }
}

export default counter;