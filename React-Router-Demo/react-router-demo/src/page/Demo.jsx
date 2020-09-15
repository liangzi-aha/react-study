import React from 'react';

export default class Demo extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div>
                demo:{this.props.name}
            </div>
        )
    }
}