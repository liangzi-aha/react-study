import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './mine.less';

export default class Mine extends React.Component {
    constructor(props) {
        super();
        this.state = {
            
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div style={{backgroundColor:"white",height:'100%'}}>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >保险经纪网</NavBar>

                <div className="user-login" style={{ backgroundImage: "url(" + require("../static/images/mine/minebg.png") + ")"} }>
                    <div className="user_head">
                        <img src={ require("../static/images/mine/headimg.png") } alt="" />
                    </div>
                    <div className="cenDiv">
                        <p className="userName">您还未登录，请先登录</p>
                        <button>登录/注册</button>
                    </div>
                    <Icon type="right" color={'#fff'} style={{ verticalAlign:"middle",height:'100%',marginLeft:'40px' }}/>
                </div>

                <div className="policyList">
                    <div className="sameTitle">
                        <span className="leftB"></span>
                        <p className="titleA">我的保单</p>
                    </div>
                    <ul className="policyTab">
                        <li>
                            <img src={ require('../static/images/mine/policy1.png') } alt=""/>
                            <p>个险保单</p>
                        </li>
                        <li>
                            <img src={ require('../static/images/mine/policy2.png')} alt=""/>
                            <p>团险保单</p>
                        </li>
                        <li>
                            <img src={ require('../static/images/mine/policy3.png')} alt=""/>
                            <p>车险保单</p>
                        </li>
                    </ul>
                    <img src={ require('../static/images/mine/dlrbanner.png') } alt="" style={{ padding:'5px 20px' }} width="100%"/>
                </div>
                
                <div className="colorBlock"></div>

                <div>
                    <div className="sameTitle">
                        <span className="leftB"></span>
                        <p className="titleA">其他</p>
                    </div>
                    <div className="other">
                        <div>
                            <img src={require('../static/images/mine/other1.png')} alt="" />
                            <span>活动专区</span>
                            <Icon type="right" style={{ verticalAlign: "middle", height: '100%', float:"right" }} />
                        </div>
                        <div>
                            <img src={require('../static/images/mine/other2.png')} alt="" />
                            <span>常用联系人</span>
                            <Icon type="right" style={{ verticalAlign: "middle", height: '100%', float: "right" }} />
                        </div>
                        <div>
                            <img src={require('../static/images/mine/other3.png')} alt="" />
                            <span>理赔报案</span>
                            <Icon type="right" style={{ verticalAlign: "middle", height: '100%', float: "right" }} />
                        </div>
                        <div>
                            <img src={require('../static/images/mine/other4.png')} alt="" />
                            <span>客服中心</span>
                            <Icon type="right" style={{ verticalAlign: "middle", height: '100%', float: "right" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}