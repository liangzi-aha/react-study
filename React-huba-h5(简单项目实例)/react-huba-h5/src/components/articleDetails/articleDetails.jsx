//组件说明
import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import fetch from '../../fetch/fetch';
import './articleDetails.less';

export default class articleDetails extends React.Component {
     constructor(props){
       super(props);
       this.state = {
           articleDetails:'',
       }
     }

     componentDidMount() {
         var linkParams = new URLSearchParams(this.props.location.search);

         fetch.studyClassroomDetail({ id: linkParams.get('id')}).then(res=>{
            this.setState({
                articleDetails:res,
            });
            console.log(this.state.articleDetails)
         })
     }
     

     render() {
       return (
           <div className="articleDetails" style={{backgroundColor:'white'}}>
               <NavBar
                   mode="light"
                   icon={<Icon type="left" />}
                   onLeftClick={() => this.props.history.go(-1)}
               >文章详情
                </NavBar>
                {
                   this.state.articleDetails ?
                    <div style={{padding:'20px'}}>
                        <h3>{this.state.articleDetails.classroomTitle}</h3>
                        <div style={{marginTop:'20px'}} dangerouslySetInnerHTML={{ __html: this.state.articleDetails.classroomContent }}></div>
                    </div>
                    : ''
                }
           </div>
     );
   }
}