import { ADD_USER } from '../constants/index';

const data = {
    value: {
        name:'张三',
        sex: '男'
    }
}

const user = (state = data,action)=>{
    switch(action.type){
        case ADD_USER:
            return Object.assign({},state,action);
        default :
            return state
    }
}

export default user;