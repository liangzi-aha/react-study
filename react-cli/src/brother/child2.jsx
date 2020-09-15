import React from 'react';

export default class child2 extends React.Component {

    constructor() {
        super();
        this.state = {
            input2:0
        }
    }

    changeHandler(e) {
        this.setState({
            input2: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.money * 7} onChange={this.changeHandler.bind(this)} readOnly/>
            </div>
        )
    }
}