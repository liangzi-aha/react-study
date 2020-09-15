import React from 'react';

export default class compose extends React.Component{
    render(){
        return(
            <div>
                哈哈哈{this.props.children}
                {this.props.left}
            </div>
        )
    }
}