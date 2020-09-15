import React from 'react';

export default class FromDemo extends React.Component{

    constructor(){
        super();
        this.state = {
            value:""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state.value);
    }

    onChangeHandle = (e)=>{
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return(
            <div>
                受控表单（value由数据绑定）
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onChangeHandle }/>
                    <button type="submit">提交</button>
                </form>
                
            </div>
        )
    }
}