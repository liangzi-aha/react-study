import React from 'react';

export default class refsAndDom extends React.Component{

    constructor(){
        super();
        // react获取dom方法一：创建ref 绑定到标签上，以备获取dom
        this.HelloDiv = React.createRef();
    }

    componentDidMount(){
        console.log(this.HelloDiv.current);
        this.HelloDiv.current.style.color = 'red';
        /* react获取dom方法二：标签上绑定字符串ref 获取 */
        this.refs.hello.style.color = 'blue';
        console.log(this.refs.hello);
    }

    render(){
        return(
            <div>
                refsAndDom
                <div ref={this.HelloDiv }>hello</div>
                {/* react获取dom方法二：标签上绑定字符串ref 获取 */}
                <div ref="hello">
                    你好
                </div>
            </div>
        )
    }
}