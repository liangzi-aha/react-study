import React from 'react';
// import Home from './components/home'
// import Mine from './components/mine'
// import Nav from './components/nav'
// import Life from "./components/componentsLife";
// import Setstatedemo from "./components/setStateDemo";
// import IfDeom from './components/ifDemo';
// import KeyDemo from './components/keyDemo';
// import FromDemo from './components/FromDemo';
// import RefsAndDom from './components/refsAndDom';
// import RefsForm from './components/RefsForm';
// import Parent from './brother/parent';
// import Compose from './components/compose';
import PropsTypeDemo from './components/PropsTypeDemo'



// 用类的形式创建组件，Hook形式
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title:"文本1",
    }
  }

  // clickChange = (date)=>{
  //   this.setState({
  //     title: date
  //   })
  // }

  // 渲染函数
  render() {
    // const nav1 = ["首页","视频","学习"];
    // const nav2 = ["web", "java", "node"];

    return (
      <div>
        {/* <h1>jsx语法渲染</h1>
        <Home />
        <Mine nav={nav1} title="导航"/>
        <Mine nav={nav2} title="学习导航"/>
        <Nav />
        <Life title={this.state.title} clickChanges={ this.clickChange }/>
        <Setstatedemo /> */}
        {/* <IfDeom /> */}
        {/* <KeyDemo /> */}
        {/* <FromDemo/>
        <RefsAndDom/>
        <RefsForm/> */}
        {/* <Parent /> */}
        {/* 这里组合效果，和vue的插槽是一样的性质 */}
        {/* <Compose left="left" >
          <div>我是组合效果</div>
        </Compose> */}
        <PropsTypeDemo title="标题"/>
      </div>
    );
  }
}
export default App;