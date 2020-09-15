import React from 'react';

export default class child1 extends React.Component{
    
    constructor(){
        super();
        this.state = {
            input1:0
        }
    }
    
    changeHandler(e){
        this.setState({
            input1:e.target.value
        });
    }

    render(){
        return(
            <div>
                <input type="text" value={this.props.money} onChange={this.changeHandler.bind(this)} readOnly/>
            </div>
        )
    }
}