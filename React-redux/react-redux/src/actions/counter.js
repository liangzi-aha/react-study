import * as constants from '../constants/index';

// export function increment(num){
//     return {
//         type: constants.INCREMENT,
//         num
//     }
// }

export function increment(num){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type: constants.INCREMENT,
                num
            })
        },1000)
    }
}

export function decrement(num){
    return {
        type: constants.DECREMENT,
        num
    }
}