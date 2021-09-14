//组件说明
import React from 'react'

/*
  componentWillMount:组件将要被挂载。
  componentDidMount:组件完成挂载，此时组件已经显示在页面上。
  componentWillReceiveProps:组件将要接受新的属性。
  shouldComponentUpdate：组件是否需要进行更新。此时，组件尚未被更新。
  componentWillUpdate:组件将要被更新。
  componentDidUpdate:此时页面被重新渲染。
  componentWillUnmount：组件将要被卸载的时候。
 */

export default class Life extends React.Component {

    componentWillMount() {
      console.log("componentWillMount:组件将要被挂载。");
    }

    componentDidMount() {
      console.log("componentDidMount:组件完成挂载，此时组件已经显示在页面上。");
    }

    componentWillReceiveProps() {
      console.log("componentWillReceiveProps:组件将要接受新的属性。");
    }

    shouldComponentUpdate() {
      console.log("shouldComponentUpdate：组件是否需要进行更新。此时，组件尚未被更新。");
      return true;
    }

    componentWillUpdate() {
      console.log("componentWillUpdate:组件将要被更新。");
    }

    componentDidUpdate() {
      console.log("componentDidUpdate:此时页面被重新渲染。");
    }

    componentWillUnmount() {
      console.log("componentWillUnmount：组件将要被卸载的时候。");
    }

    constructor(props) {
      super(props);
      this.state = {
        count: 10,
      };
    }

    addCount = ()=>{
      console.log(this);
      this.setState({
        count: this.state.count + 1
      })
    }

    clickChange = ()=>{
      this.props.clickChanges("我是儿子组件");
    }

    // render 可以写js
     render() {
       const { count } = this.state;
       return (
         <div>{ count } - { this.props.title }<br/>
           <button onClick={this.addCount}>修改状态</button>
           <button onClick={ this.clickChange }>修改title</button>
         </div>
     );
   }
}