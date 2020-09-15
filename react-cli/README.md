## 创建React项目
npx create-react-app
 cd react-demo
 npm start

 ## 环境介绍
 node_modules:非常大
 public:入口文件
 src:漂码文件

 ## React基础知识
 ## JSX语法介绍JSx法: 
 Javascript+XML语法(HTML)解读jsx语法:遇到 按照HTML语法解析,遇到()按照JavaScript元素渲染组件,组件的后缀可以是js,也可以是jsx,一个React项目,是由成千上万个组件组成
 
 ## porps属性
 组件的复用性很重要
 
 ## 事件处理
 1、this问题
 2、向事件处理程序传递参数
 
 ## State
 
 ## React 生命周期函数
 随着我们队react理解越来越多，生命周期参考的价值越来越高
 函数列表 ：
    componentWillMount:组件将要被挂载。
    componentDidMount:组件完成挂载，此时组件已经显示在页面上。
    componentWillReceiveProps:组件将要接受新的属性。
    shouldComponentUpdate：组件是否需要进行更新。此时，组件尚未被更新。
    componentWillUpdate:组件将要被更新。
    componentDidUpdate:此时页面被重新渲染。
    componentWillUnmount：组件将要被卸载的时候。
 

   react的生命周期。分为三个阶段

   1.组件的创建阶段。组件的生命周期函数只执行一次。

   componentWillMount:组件将要被挂载。

   render:第一次开始渲染真正的虚拟DOM，当render执行完。内存中就有完整的虚拟DOM了。

   componentDidMount:组件完成挂载，此时组件已经显示在页面上。

   2.组件运行阶段。根据组件state和props的改变。

   componentWillReceiveProps:组件将要接受新的属性。

   shouldComponentUpdate：组件是否需要进行更新。此时，组件尚未被更新。

   componentWillUpdate:组件将要被更新。

   componentDidUpdate:此时页面被重新渲染。

   render:根据新的state和props重新的渲染内存中的虚拟DOM数。

   3.组件的销毁阶段：

   componentWillUnmount：组件将要被卸载的时候。

   子传父!!!
   父传子!!!

   ### setState 更新是同步还是异步
   1、setState 会引起视图的重绘
   2、在可控的情况下是异步，在非可控的情况下是同步

   ### 条件渲染
   
   ### 列表渲染
   key 问题
   绑定key优点：在我们循环渲染dom的时候，如果修改了数据，绑定key值的数据没有改变则不会重新绘制dom，反则重绘dom


### 表单
1、受控组件
2、非受控组件

### refs
1、管理焦点，文本选择或媒体播放
2、触发强制动画
3、继承第三方 dom 库


### 状态提升
组件之间的数据交互

### 组合 vs 继承
this.props.children

### 使用 propTypes 进行类型检查
增强组件的健壮性