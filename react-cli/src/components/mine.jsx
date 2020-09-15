//组件说明
import React from 'react'

// props不可以去修改
export default class mine extends React.Component {
     render() {
       const list = this.props.nav;
       console.log(list);
       return (
        <div>
          {/* jsx语法解析 */}
          <h1>{ this.props.title }</h1>
          <ul>
            {
               this.props.nav.map((element,index)=>{
                 return <li key={ index }>{ element }</li>
               })
            }
          </ul>
        </div>
     );
   }
}