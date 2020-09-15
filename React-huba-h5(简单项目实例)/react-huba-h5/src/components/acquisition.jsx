import React from 'react';
import { Tabs, Badge, SearchBar } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import AcquisitionList from './acquisitionList/acquisitionList';

export default class acquisition extends React.Component {
    constructor(props) {
        super();
        this.state = {
            "保险理念": {
                cateType: '07', // 请求列表id 
                page: 1, // 当前页数
                limit: 5,  // 每页大小
                refreshing: true,  // 下拉刷新是否展示
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                datas:'', // 当前页数据
            },
            "产品介绍": {
                cateType: '09',
                page: 1, // 当前页数
                limit: 5,  // 每页大小
                refreshing: true,  // 下拉刷新是否展示
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                datas: '', // 当前页数据
            },
            "政策法规": {
                cateType: '10',
                page: 1, // 当前页数
                limit: 5,  // 每页大小
                refreshing: true,  // 下拉刷新是否展示
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                datas: '', // 当前页数据
            }
        }
    }

    componentDidMount() {

    }

    // 提供给子组件修改数据的方法
    setProductListDate = (key, value) => {
        // 修改单个属性
        var obj = Object.assign(this.state[key], value);
        this.setState({
            [key]: obj
        })
    }

    render() {
        const tabs = [
            { title: <Badge>保险理念</Badge> },
            { title: <Badge>产品介绍</Badge> },
            { title: <Badge>政策法规</Badge> },
        ];

        return (
            <div style={{ height: '100%'}}>
                <NavBar mode="light" style={{ borderBottom: "solid 1px #ebedf0" }}>展业</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <AcquisitionList date={this.state['保险理念']} setProductListDate={this.setProductListDate} ListKey="保险理念"/>
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <AcquisitionList date={this.state['产品介绍']} setProductListDate={this.setProductListDate} ListKey="产品介绍"/>
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <AcquisitionList date={this.state['政策法规']} setProductListDate={this.setProductListDate} ListKey="政策法规"/>
                    </div>
                </Tabs>
            </div>
        )
    }
}