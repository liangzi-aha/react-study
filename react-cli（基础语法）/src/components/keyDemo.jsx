import React from 'react';

export default class keyDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            userInfo:[
                {
                    name:'亮亮',
                    age:'18',
                    sex:'男',
                    jobs:['1111','2222','3333']
                },
                {
                    name: '小明',
                    age: '18',
                    sex: '男'
                },
                {
                    name: '小红',
                    age: '18',
                    sex: '男'
                }
            ]
        }
    }

    clickHandler = ()=>{
        this.setState({
            userInfo: this.state.userInfo.concat({
                name: '小花',
                age: '17',
                sex: '女'
            })
        })
    }

    render(){
        return(
            <div>
                列表渲染
                <ul>
                    {
                        this.state.userInfo.map((element,index)=>{
                            return <li key={index}>
                                <span>{element.name}</span>
                                <span>{element.age}</span>
                                <span>{element.sex}</span>
                                <div>
                                    {
                                        element.jobs ?
                                            element.jobs.map((childElement, childIndex) => {
                                                return <span key={childIndex}>{childElement}</span>
                                            })
                                            : ''
                                    }
                                </div>
                            </li>
                        })
                    }
                </ul>
                <button onClick={this.clickHandler}>添加数据</button>
            </div>
        )
    }
}