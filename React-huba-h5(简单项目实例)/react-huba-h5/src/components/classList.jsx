import React from 'react';
import { Tabs, Badge, SearchBar } from 'antd-mobile';
import ProductList from './productList/productList';
import { withRouter } from 'react-router-dom';

class classList extends React.Component {
    constructor(props){
        super(props);
        var linkParams = new URLSearchParams(this.props.location.search);
        this.state = {
            activityTab: Number(linkParams.get("activityTab")),
            value: '',
            child: '', // 获取子组件，调用子组件方法
            '全部': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '""', //请求数据列表标题
                goodName: '',
            },
            '旅游险': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '"旅游险"', //请求数据列表标题
                goodName: '',
            },
            '意外险': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '"意外险"', //请求数据列表标题
                goodName: '',
            },
            '健康险': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '"健康险"', //请求数据列表标题
                goodName: '',
            },
            '人寿险': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '"人寿险"', //请求数据列表标题
                goodName: '',
            },
            '团体险': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '"团体险"', //请求数据列表标题
                goodName: '',
            },
            '财产险': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '"财产险"', //请求数据列表标题
                goodName: '',
            },
            '行业险': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '"行业险"', //请求数据列表标题
                goodName: '',
            }
        };
    }

    // 提供给子组件修改数据的方法
    setProductListDate = (key,value)=>{
        this.setState({
            [key]: value
        })
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log(this.props);
    }
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    };
    onSubmit = (value) =>{
        console.log(value);
        this.setState({
            '全部': {
                datas: [], // 当前页数据
                pageNo: 1, // 第几页
                hasMore: true,  // 下拉刷新后，重新允许开下拉加载
                refreshing: true,  // 是否在刷新数据
                isLoading: true, // 是否加载完成
                dataArr: [],  // 全部数据
                classTag: '""', // 请求数据列表标题
                goodName: value
            }
        },()=>{
            this.child.getData();
            document.getElementById('m-tabs-1-0').click();
        })
        
    }
    // 子组件挂到父组件state里面
    setChild = (that)=>{
        this.child = that; 
    }
    
    render() {
        const tabs = [
            { title: <Badge>全部</Badge> },
            { title: <Badge>旅游险</Badge> },
            { title: <Badge>意外险</Badge> },
            { title: <Badge>健康险</Badge> },
            { title: <Badge>人寿险</Badge> },
            { title: <Badge>团体险</Badge> },
            { title: <Badge>财产险</Badge> },
            { title: <Badge>行业险</Badge> },
        ];

        return (<div style={{ width: '100%', overflow: 'hidden', height: '100%' }}>
            <SearchBar
                value={this.state.value}
                placeholder="请输入产品名称"
                onSubmit={value => this.onSubmit(value)}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                onChange={this.onChange}
            />

            <Tabs tabs={tabs}
                initialPage={ this.state.activityTab }
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['全部']} ListKey="全部" setChild={this.setChild} setProductListDate={this.setProductListDate}/>
                </div>
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['旅游险']} ListKey="旅游险" setProductListDate={this.setProductListDate} />
                </div>
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['意外险']} ListKey="意外险" setProductListDate={this.setProductListDate} />
                 </div>
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['健康险']} ListKey="健康险" setProductListDate={this.setProductListDate} />
                 </div>
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['人寿险']} ListKey="人寿险" setProductListDate={this.setProductListDate} />
                 </div>
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['团体险']} ListKey="团体险" setProductListDate={this.setProductListDate} />
                 </div>
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['财产险']} ListKey="财产险" setProductListDate={this.setProductListDate} />
                 </div>
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                    <ProductList productListDate={this.state['行业险']} ListKey="行业险" setProductListDate={this.setProductListDate} />
                 </div>
            </Tabs>
        </div>);
    }
}

export default withRouter(classList)