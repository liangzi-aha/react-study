import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './reducers/counter';

// 创建仓库
const store = createStore(reducer);
 
const render = ()=>{
  ReactDOM.render(
    // React.StrictMode 严格模式 是一个用来检查项目中潜在问题的工具
    <React.StrictMode>
      <App  
      onIncrement = { ()=>{ store.dispatch({ type:"INCREMENT" }) } } 
      onDecrement = { ()=>{ store.dispatch({ type: "DECREMENT" }) } }
      value={ store.getState() }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

// 监听数据变化
store.subscribe(()=>{
  render();
  console.log('state',store.getState());
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
