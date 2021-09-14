import React from 'react';
import './App.css';
// connect 用于组件和 redux连接起来
import { connect } from 'react-redux';
// import { increment,decrement } from './actions/counter';
import * as counterAction from './actions/counter';
// bindActionCreators是redux的一个自带函数，作用是将单个或多个ActionCreator转化为dispatch(action)的函数集合形式。
// 开发者不用再手动dispatch(actionCreator(type))，而是可以直接调用方法。
import { bindActionCreators } from 'redux';
import User from './components/user';

class App extends React.Component{

  render(){
    // const { increment,decrement } = this.props;

    return(
      <div className="App">
        <h1>{ this.props.counter }</h1>
        {/* <button onClick={ ()=> increment(10) }>
          增加
        </button>
        <button onClick={ ()=> decrement(5) }>
          减少
        </button> */}
        <button onClick={ ()=> this.props.counterAction.increment(10) }>
          增加
        </button>
        <button onClick={ ()=> this.props.counterAction.decrement(5) }>
          减少
        </button>
        <User/>
    </div>
    )
  }
}

// 遍历 state 绑定到组件props上
const mapStateToProps = (state)=>{
  return{
    counter: state.counter
  }
}

// 遍历 dispatch 绑定到组件 props 上
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     increment: (num)=>{ dispatch(increment(num)) },
//     decrement: (num)=>{ dispatch(decrement(num)) }
//   }
// }

const mapDispatchToProps = (dispatch)=>{
  return{
    counterAction: bindActionCreators(counterAction,dispatch)
  }
}


// 通过connect把组件和redux进行关联
export default connect(mapStateToProps,mapDispatchToProps)(App)
