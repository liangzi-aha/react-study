import React from 'react';
import Banner from '../banner';
import './home.less';
import GirdenuImg1 from '../../static/images/home/home-icon1.png';
import GirdenuImg2 from '../../static/images/home/home-icon2.png';
import GirdenuImg3 from '../../static/images/home/home-icon3.png';
import GirdenuImg4 from '../../static/images/home/home-icon4.png';
import GirdenuImg5 from '../../static/images/home/home-icon5.png';
import GirdenuImg6 from '../../static/images/home/home-icon6.png';
import GirdenuImg7 from '../../static/images/home/home-icon7.png';
import GirdenuImg8 from '../../static/images/home/home-icon8.png';
import AgentPlan from '../agentPlan/agentPlan';
import LifeMenu from '../lifeMenu/lifeMenu';
import { Link } from 'react-router-dom';


// 九宫格
class Girdenu extends React.Component{
    
    render(){
        return(
            <div className="Girdenu">
                <ul>
                    <li>
                        <img src={GirdenuImg1} alt=""/>
                        <p>保险特卖</p>
                    </li>
                    <li onClick={() => { this.props.routerChildPage({ pathname: '/hsfront/classList', search: '?activityTab=1' }) }}>
                        <img src={GirdenuImg2} alt=""/>
                        <p>旅游保险</p>
                    </li>
                    <li onClick={() => { this.props.routerChildPage({ pathname: '/hsfront/classList', search: '?activityTab=6' }) }}>
                        <img src={GirdenuImg3} alt=""/>
                        <p>财产保险</p>
                    </li>
                    <li onClick={() => { this.props.routerChildPage({ pathname: '/hsfront/classList', search: '?activityTab=2' }) }}>
                        <img src={GirdenuImg4} alt=""/>
                        <p>意外保险</p>
                    </li>
                    <li onClick={() => { this.props.routerChildPage({ pathname: '/hsfront/classList', search: '?activityTab=3' }) }}>
                        <img src={GirdenuImg5} alt=""/>
                        <p>健康保险</p>
                    </li>
                    <li onClick={() => { this.props.routerChildPage({ pathname: '/hsfront/classList', search: '?activityTab=7' }) }}>
                        <img src={GirdenuImg6} alt=""/>
                        <p>行业保险</p>
                    </li>
                    <li onClick={() => { this.props.routerChildPage({ pathname: '/hsfront/classList', search: '?activityTab=0' }) }}>
                        <img src={GirdenuImg7} alt=""/>
                        <p>全部产品</p>
                    </li>
                    <li>
                        <img src={GirdenuImg8} alt=""/>
                        <p>私人定制</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
    }

    render(){
        return(
            <div style={{ 'overflow': 'hidden',"backgroundColor":"white"}}>
                <Banner />
                <Girdenu routerChildPage={this.props.routerChildPage }/>
                <AgentPlan/>
                <LifeMenu/>
            </div>
        )
    }
}