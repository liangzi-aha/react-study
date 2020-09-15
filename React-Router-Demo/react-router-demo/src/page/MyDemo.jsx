import React from 'react';
import { withRouter } from 'react-router-dom';


class MyDemo extends React.Component{

    handleClick = ()=>{
        // 当前组件没有被router管理，所以没有路由对象
        console.log(this.props);
        this.props.history.push('/');
    } 

    render(){
        return(
            <div>
                MyDemo当前组件没有被router管理，使用withRouter 将react-router 的 history、location、match 三个对象传入props对象上
                <button onClick={ this.handleClick }>回到home</button>
            </div>
        )
    }
}


/**
 * 比如app.js这个组件，一般是首页，不是通过路由跳转过来的，而是直接从浏览器中输入地址打开的，如果不使用withRouter此组件的this.props为空，没法执行props中的history、location、match等方法。

 我就通过在App.js组件中使用withRouter来简单介绍一下：
 设置withRouter很简单只需要两步：（1）引入  （2）将App组件 withRouter() 一下
 */
// withRouter作用：把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
export default withRouter(MyDemo)