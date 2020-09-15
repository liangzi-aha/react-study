//组件说明
import React from 'react'

export default class setStateDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    
    // async await 配合 Promise 使用 异步等待
    async increment(){
        // this.setState({
        //     count: this.state.count + 1,
        // },()=>{
        //     console.log(this.state.count);
        // });
        // console.log(this.state.count);

        await this.setStateAsync({count:this.state.count+1});
        console.log(this.state.count);
    }

    setStateAsync(state) {
        return new Promise((resolve) =>{
            this.setState(state);
            resolve();
        })
    }

    render(){
        return(
            <div>
                <h1>setState是同步还是异步</h1>
                <p>{ this.state.count}</p>
                <button onClick={this.increment.bind(this)}>修改</button>
            </div>
        )
    }
}