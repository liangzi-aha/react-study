import React from 'react';

export default class RefsForm extends React.Component{

    constructor(){
        super();
        this.userName = React.createRef();
    }

    clickHandle = ()=>{
        console.log(this.userName.current.value);
        console.log(this.refs.userAge.value);
    }

    render(){
        return(
            <div>
                非受控表单 RefsForm <br/>
                <input type="text" ref={ this.userName }/>
                <input type="text" ref="userAge"/>
                <button onClick={ this.clickHandle }>获取</button>
            </div>
        )
    }
}