/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView, PullToRefresh } from 'antd-mobile';
import { NavLink } from "react-router-dom";
import React from 'react';
import { withRouter } from 'react-router-dom';
import fetch from '../../fetch/fetch';
import "./acquisitionList.less"

function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            {props.children}
        </div>
    );
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        // 创建ListViewDataSource对象
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2 // rowHasChanged(prevRowData, nextRowData); 用其进行数据变更的比较
        })
        console.log(this.props)
        this.state = {
            dataSource,
            imgCommonPath: 'https://test.zgbxjj.com/hsFileData',
            height: document.documentElement.clientHeight * 3 / 4,
        }
    }

    componentDidMount() {
        this.getData(true);
    }

    getData(status = false) {
        console.log(this.props.date)
        //获取数据
        fetch.studyList({
            cateType: this.props.date.cateType,
            page: this.props.date.page,
            limit: this.props.date.limit
        }).then(res => {
            const dataList = res.list;

            if (res.totalCount == this.props.date.dataArr.length) { // 判断是否已经没有数据了
                this.props.setProductListDate(this.props.ListKey, {
                    refreshing: false,
                    isLoading: false,
                });
            } else {
                /**
                 * status
                 * status :这里表示下拉刷新
                 * 下拉刷新的情况，添加第一页的数据即可
                 */
                this.props.setProductListDate(this.props.ListKey, {
                    datas: dataList,
                    refreshing: false,
                    isLoading: false,
                    dataArr: status ? dataList : this.props.date.dataArr.concat(dataList),  //这里表示刷新使用
                });
            }

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.date.dataArr), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
            })
        })
    }


    // 下拉刷新
    onRefresh = () => {
        this.props.setProductListDate(this.props.ListKey, {
            page: 1,  // 刷新嘛，一般加载第一页，或者按你自己的逻辑（比如每次刷新，换一个随机页码）
            refreshing: true,
            isLoading: true,
        });

        this.getData(true);
    }

    // 滑动到底部时加载更多
    onEndReached = (event) => {
        console.log('加载更多' + this.props.date.isLoading)
        // 加载中或没有数据了都不再加载
        if (this.props.date.isLoading) {
            return
        }

        this.props.setProductListDate(this.props.ListKey, {
            page: this.props.date.page + 1,
            isLoading: true,
        });

        this.getData(false);
    }


    render() {
        const row = (rowData, sectionID, rowID) => {
            // 这里rowData,就是上面方法cloneWithRows的数组遍历的单条数据了，直接用就行
            return (
                <NavLink className="artivleItem" to={{ pathname: '/articleDetails', search: "?id=" + rowData.id}} key={rowID}>
                    <div className="left">
                        <div className="title">{rowData.title}</div>
                        <div className="subTitle">
                            <span className="read"><span>{rowData.hRead}</span>阅读 </span>&nbsp;
                            <span className="share"><span>{rowData.hShare}</span>分享 </span>&nbsp;
                            <span className="tab"> #{rowData.key1}</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src={this.state.imgCommonPath + rowData.hSharePic} alt="" width="100%"/>
                    </div>
                </NavLink>
            )
        }
        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.props.date.isLoading ? 'Loading...' : '数据加载完毕'}
                </div>)}
                renderRow={row}
                pullToRefresh={<PullToRefresh
                    refreshing={this.props.date.refreshing}
                    onRefresh={this.onRefresh}
                />}
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                renderBodyComponent={() => <MyBody />}
                onScroll={() => { }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default withRouter(Demo)
