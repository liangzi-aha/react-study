import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// document.getElementById('root')  获取要插入的容器
// jsx语法：<App/>

// ():如果存在标签结构，并且标签结构要换行，需要用{}括起来
// function tick(){
//     const element = (
//         <div>
//             <div>Hello,word</div>
//             <h2>time {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// };

// setInterval(() => {
//     tick();
// }, 1000);

ReactDOM.render(<App/>, document.getElementById('root'));

