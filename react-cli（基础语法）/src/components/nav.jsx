//组件说明
import React from 'react'


export default class nav extends React.Component {
    /**
     * 组件中的状态：state
     * 以前我们操作页面的元素的变化，都是修改dom，操作dom
     * 但是有了React优秀的框架，我们不在推荐操作dom，页面元素的改变使用state进行处理
     */
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            flag: true,
        };
    }

    increase(){
        // setState 系统提供的方法修改 state状态
        this.setState({
            count: this.state.count+1
        })
    }

    decrease() {
        // setState 系统提供的方法修改 state状态
        this.setState({
            count: this.state.count-1
        })
    }

    setFlag = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    clickHandler = () =>{
        console.log(this);
    }

    render() {
        return (
            <div>
                <h3>组件的state</h3>
                <p>{ this.state.count }</p>
                <button onClick={this.increase.bind(this)}>增加</button>
                <button onClick={this.decrease.bind(this)}>减少</button>
                <button onClick={ this.clickHandler }>关于this</button>
                <p>{this.state.flag ? "你好" : "不好"}</p>
                <button onClick={this.setFlag}>修改状态</button>
            </div>
        );
    }
}