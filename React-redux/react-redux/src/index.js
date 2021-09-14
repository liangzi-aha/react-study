import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// createStore 用户创建仓库,applyMiddleware中间件
import { createStore,applyMiddleware } from 'redux';
// 第三方中间件 打印日志
// import Logger from 'redux-logger'
// 第三方中间件 dispatch 异步提交函数 action，修改store状态
import thouk from 'redux-thunk'
// 单个 reduce 
// import reducer from './reducers/counter';
// 多个reduce 合并
import rootReducers from './reducers/index';

// Provider 用于把 react 和 redux 进行关联，使所有的子组件都可以拿到state
import { Provider } from 'react-redux';

// 自定义中间件
const logger = store => next => action =>{
  console.log('dispatch=>',action);
  let result = next(action); //  加载下一个中间件
  console.log('next state=>',store.getState());
  return result;
}

// 自定义中间件处理 action 函数形式
// const logger1 = store => next => action =>{
//   console.log('dispatch=>',action);
//   let result;
//   // 处理action 函数异步调用，或Ajax请求调用
//   if(typeof action == 'object'){
//     result = next(action);
//   }else if(typeof action == 'function'){
//     action(function(dispatch){
//       result = next(dispatch);
//     });
//   }
//   console.log('next state=>',store.getState());
//   return result;
// }

// 创建仓库 参数1：reduce、参数2：初始化 state、参数3：中间件，处理store的更新状态
const store = createStore(rootReducers,{},applyMiddleware(logger,thouk));  //可设置多个自定义中间件，使用逗号隔开
// const store = createStore(rootReducers,{},applyMiddleware(Logger));  // 第三方中间件

ReactDOM.render(
  // React.StrictMode 严格模式 是一个用来检查项目中潜在问题的工具
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// 监听数据变化
store.subscribe(() => {
  console.log('state', store.getState());
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
