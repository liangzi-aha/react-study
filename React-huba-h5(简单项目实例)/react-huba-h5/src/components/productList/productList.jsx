/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView, PullToRefresh } from 'antd-mobile';
import { NavLink } from "react-router-dom";
import React from 'react';
import fetch from '../../fetch/fetch';
import './productList.less';

function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            {props.children}
        </div>
    );
}

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        // 创建ListViewDataSource对象
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2 // rowHasChanged(prevRowData, nextRowData); 用其进行数据变更的比较
        })
        console.log(this.props)
        this.state = {
            dataSource,
            imgCommonPath: 'https://test.zgbxjj.com',
            height: document.documentElement.clientHeight * 3 / 4,
        }
    }

    componentDidMount() {
        this.getData(true);
        if (this.props.ListKey === '全部'){
            this.props.setChild(this);
        }
    }

    getData(ref = false) {
        console.log(this.props.productListDate)
        //获取数据
        fetch.getProdGoodsList({ params: '{ "classTag": ' + this.props.productListDate.classTag + ', "currentPage": ' + this.props.productListDate.pageNo + ', "goodName": "' + this.props.productListDate.goodName + '" }' }).then(res => {
            const dataList = res.data.list;

            if (res.data.isLastPage) { // 判断是否已经没有数据了
                this.props.setProductListDate(this.props.ListKey, {
                    datas: this.props.productListDate.datas,
                    pageNo: this.props.productListDate.pageNo,
                    hasMore: false,
                    refreshing: false,
                    isLoading: false,
                    dataArr: ref ? dataList : this.props.productListDate.dataArr.concat(dataList),
                    classTag: this.props.productListDate.classTag,
                    goodName: this.props.productListDate.goodName,
                });
            }else{
                /**
                 * ref
                 * ref :这里表示下拉刷新
                 * 下拉刷新的情况，添加第一页的数据即可
                 */
                this.props.setProductListDate(this.props.ListKey, {
                    datas: this.props.productListDate.datas,
                    pageNo: this.props.productListDate.pageNo,
                    hasMore: true,
                    refreshing: false,
                    isLoading: false,
                    dataArr: ref ? dataList : this.props.productListDate.dataArr.concat(dataList),  //这里表示刷新使用
                    classTag: this.props.productListDate.classTag,
                    goodName: this.props.productListDate.goodName,
                });
            }

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.productListDate.dataArr), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
            })
        })
    }


    // 下拉刷新
    onRefresh = () => {
        this.props.setProductListDate(this.props.ListKey, {
            datas: this.props.productListDate.datas,
            pageNo: 1,  // 刷新嘛，一般加载第一页，或者按你自己的逻辑（比如每次刷新，换一个随机页码）
            hasMore: this.props.productListDate.hasMore,
            refreshing: true,
            isLoading: true,
            dataArr: this.props.productListDate.dataArr,
            classTag: this.props.productListDate.classTag,
            goodName: this.props.productListDate.goodName,
        });
        this.getData(true);
    }

    // 滑动到底部时加载更多
    onEndReached = (event) => {
        console.log('加载更多' + this.props.productListDate.isLoading + !this.props.productListDate.hasMore)
        // 加载中或没有数据了都不再加载
        if (this.props.productListDate.isLoading || !this.props.productListDate.hasMore) {
            return
        }

        this.props.setProductListDate(this.props.ListKey, {
            datas: this.props.productListDate.datas,
            pageNo: this.props.productListDate.pageNo + 1,
            hasMore: this.props.productListDate.hasMore,
            refreshing: this.props.productListDate.refreshing,
            isLoading: true,
            dataArr: this.props.productListDate.dataArr,
            classTag: this.props.productListDate.classTag,
            goodName: this.props.productListDate.goodName,
        });
        this.getData(false);
    }


    render() {
        const row = (rowData, sectionID, rowID) => {
            // 这里rowData,就是上面方法cloneWithRows的数组遍历的单条数据了，直接用就行
            return (
                <li className="classBox" key={rowID}>
                    <NavLink to={{
                        pathname: '/productDetails',
                        search: "?id=" + rowData.id,
                    }} >
                        <div className="leftDiv">
                            <img src={this.state.imgCommonPath + rowData.goodSmallImg} alt="" />
                            <span>{rowData.goodInsuranceCompanyAlias}</span>
                        </div>
                        <div className="rightDiv">
                            <p className="right_one">{rowData.goodName}</p>
                            <p className="right_two" dangerouslySetInnerHTML={{ __html: rowData.goodListPromotionalCopy}}></p>
                            <p className="right_three">
                                <span className="minFee">
                                    ￥{rowData.minFee}
                                    <span style={{ fontSize: '11px' }}>起</span>
                                </span>
                            </p>
                        </div>
                    </NavLink>
                </li >
            )
        }
        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.props.productListDate.isLoading ? 'Loading...' : '数据加载完毕'}
                </div>)}
                renderRow={row}
                pullToRefresh={<PullToRefresh
                    refreshing={this.props.productListDate.refreshing}
                    onRefresh={this.onRefresh}
                />}
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                renderBodyComponent={() => <MyBody />}
                onScroll={() => {  }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={200}
            />
        );
    }
}
