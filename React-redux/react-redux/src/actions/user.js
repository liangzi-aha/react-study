import { ADD_USER } from '../constants/index';

export function addUser(value,data){
    if(value){
        return{
            type: ADD_USER,
            value: value,
        }
    }else{
        return{
            type: ADD_USER,
            data: data,
        }
    }
}

export function fetchUser(){
    return (dispatch)=>{
        fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
        .then(res=> res.json())
        .then(data =>{
            dispatch(addUser('',data.chengpinDetails[0]))
        })
    }
}