import React from 'react';

export default class UCenter extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
        <div>UCenter 
        <br/> id:{this.props.match.params.id}
        <br/>name:{this.props.match.params.name}</div>
        )
    }
}
