import React from 'react';
import planload from '../../static/images/home/planload.png';
import agentload from '../../static/images/home/agentload.png';
import './agentPlan.less';

export default class agentPlan extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-menu">
                    <li>
                        <img src={agentload} alt=""/>
                        <div className="menu_one">
                            <p>代理人</p>
                            <ul>
                                <li>
                                    <i></i>推广赚取
                                </li>
                                <li>
                                    <i></i>高额佣金
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li >
                        <img src={planload} alt=""/>
                        <div className="menu_two">
                            <p>计划书</p>
                            <ul>
                                <li>
                                    <i></i>定制专属
                                </li>
                                <li>
                                    <i></i>保险计划
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="colorBlock"></div>
            </div >
        )
    }
}