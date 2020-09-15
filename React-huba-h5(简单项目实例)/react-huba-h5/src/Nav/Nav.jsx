import React from 'react';
import { TabBar } from 'antd-mobile';
import './Nav.css';
import activeHome from "../static/images/tabbar/homeTabbar1.png";
import staticHome from "../static/images/tabbar/homeTabbar.png";
import staticClasslist from "../static/images/tabbar/classlistTabbar.png";
import activeClasslist from "../static/images/tabbar/classlistTabbar1.png";
import staticMine from "../static/images/tabbar/mineTabbar.png";
import activeMine from "../static/images/tabbar/mineTabbar1.png";
import staticStudy from "../static/images/tabbar/studyTabbar.png";
import activeStudy from "../static/images/tabbar/studyTabbar1.png";
import Home from '../components/home/home';
import ClassList from '../components/classList';
import Acquisition from '../components/acquisition';
import Mine from '../components/mine';
import {  Route, Switch } from "react-router-dom";



export default class Nav extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.location.pathname,
            hidden: false,
            fullScreen: true,
        };
    }

    componentDidMount() {
        console.log(this.props.location.pathname.substr(1))
    }

    // 跳转子页面
    routerChildPage = (router)=>{
        this.setState({
            selectedTab: router.pathname
        });
        console.log(router);
        this.props.history.push(router);
    }
    

    renderContent(pageText) {
        
    }


    render(){
        return(
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <Switch>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="首页"
                            key="home"
                            icon={{ uri: staticHome }}
                            selectedIcon={{ uri: activeHome }}
                            selected={this.state.selectedTab === '/hsfront/home'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/hsfront/home',
                                });
                                this.props.history.push('/hsfront/home')
                            }}
                            data-seed="logId"
                        >
                            <Route path="/hsfront/home" render={() => <Home routerChildPage={this.routerChildPage}/>}></Route>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: staticClasslist }}
                            selectedIcon={{ uri: activeClasslist }}
                            title="分类"
                            key="classList"
                            selected={this.state.selectedTab === '/hsfront/classList'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/hsfront/classList',
                                });
                                this.props.history.push('/hsfront/classList')
                            }}
                            data-seed="logId1"
                        >
                            {/* (props) */}
                            <Route path="/hsfront/classList" render={() =>  <ClassList />}></Route>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: staticMine }}
                            selectedIcon={{ uri: activeMine }}
                            title="展业"
                            key="acquisition"
                            selected={this.state.selectedTab === '/hsfront/acquisition'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/hsfront/acquisition',
                                });
                                this.props.history.push('/hsfront/acquisition')
                            }}
                        >
                            <Route path="/hsfront/acquisition" component={Acquisition}></Route>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: staticStudy }}
                            selectedIcon={{ uri: activeStudy }}
                            title="我的"
                            key="mine"
                            selected={this.state.selectedTab === '/hsfront/mine'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/hsfront/mine',
                                });
                                this.props.history.push('/hsfront/mine')
                            }}
                        >
                            <Route path="/hsfront/mine" component={Mine}></Route>
                        </TabBar.Item>
                    </TabBar>
                </Switch>
            </div>
        )
    }
}