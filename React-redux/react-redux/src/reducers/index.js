import { combineReducers } from 'redux';
import counter from './counter';
import user from './user'

// 合并多个 reduce
const rootReducers = combineReducers({
    counter:counter,
    user:user
});

export default rootReducers;