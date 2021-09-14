import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../actions/user';

class User extends React.Component{
    render(){
        const { setUser,getUser } = this.props;

        return(
            <div>
                <ul>
                    <li>用户名：{getUser.value.name}</li>
                    <li>性别：{getUser.value.sex}</li>
                </ul>
                <button onClick={ ()=>{
                    setUser.addUser({
                        name:'王二',
                        sex: '女'
                    })
                } }>切换用户</button>
                <button onClick={ ()=>{
                    setUser.fetchUser()
                } }>请求接口</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        getUser: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setUser: bindActionCreators(userAction,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(User)