import React from 'react';
import './productDetails.less';
import { NavBar, Icon } from 'antd-mobile';
import fetch from '../../fetch/fetch';
import { Accordion, Button, Tabs, Badge, Modal, WingBlank, Toast } from 'antd-mobile';

// 产品介绍
function ProductDetailsTab(props) {
    const tabs = [
        { title: <Badge>产品详情</Badge> },
        { title: <Badge>购买须知</Badge> },
        { title: <Badge>理赔服务</Badge> },
        { title: <Badge>用户评价</Badge> },
    ];

    return (
        <div>
            <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
                <div style={{ backgroundColor: '#fff', minHeight:'150px' }}>
                    <div className="sameTitle">
                        <span className="leftB"></span>
                        <p className="titleA" style={{ fontSize: '15px' }}>产品特色</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: props.productDetails.prodGoods.goodFeatureOfProduct }}>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff', minHeight: '150px' }}>
                    <div className="sameTitle">
                        <span className="leftB"></span>
                        <p className="titleA" style={{ fontSize: '15px' }}>购买须知</p>
                    </div>
                    <div style={{ padding: '10px 15px' }} dangerouslySetInnerHTML={{ __html: props.productDetails.prodGoods.goodPurchaseNotes }}>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff', minHeight: '150px' }}>
                    <div className="sameTitle">
                        <span className="leftB"></span>
                        <p className="titleA" style={{ fontSize: '15px' }}>理赔服务</p>
                    </div>
                    <div className="quota" id="tabThird">
                        <ul>
                            <li>
                                <img src={require('../../static/images/productDetails/lipei1.png')} alt="" />
                                <span>出险后，请您立即拨打客服电话24小时客服热线进行报案。</span>
                            </li>
                            <li>
                                <img src={require('../../static/images/productDetails/lipei2.png')} alt="" />
                                <span>保险公司根据案件情况，及时立案、安排人员上门查勘，并指导您提供本案理赔所需资料。</span>
                            </li>
                            <li>
                                <img src={require('../../static/images/productDetails/lipei3.png')} alt="" />
                                <span>理赔资料齐全后，请您递交保险公司并索取理赔资料收讫依据；保险公司按照保险合同约定时间进行赔付。</span>
                            </li>
                            <li>
                                <img src={require('../../static/images/productDetails/lipei4.png')} alt="" />
                                <span>请您在接到保险公司赔款通知后，查询赔款到账情况；如有疑问拨打保险公司客服热线进行咨询。</span>
                            </li>
                            <li>
                                <img src={require('../../static/images/productDetails/lipei5.png')} alt="" />
                                <span>如果发生理赔纠纷，请您拨打环晟保险经纪公司24小时理赔服务电话0571-88310700，由环晟理赔顾问帮助您与保险公司沟通、协调、解决理赔纠纷。</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff', minHeight: '150px' }}>
                    <div className="sameTitle">
                        <span className="leftB"></span>
                        <p className="titleA" style={{ fontSize: '15px' }}>暂无评价</p>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}

// 底部固定tabbar
function FlexTab(props) {
    return(
        <div className="flexTab">
            <div>
                <img src={require('../../static/images/productDetails/service.png')} alt="" />
            </div>
            <span className="money">￥{ props.price }</span>
            <span className="buy" onClick={()=>{
                props.setPopup()
            }}>立即投保</span>
        </div>
    )
}

export default class productDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: '',
            productImg: '', // 产品图片
            price:'', // 价格
            productId:'', // 产品id
            defaultImgPath: 'https://test.zgbxjj.com',
            activityPlan: 0, // 选择计划下标
            activityPlanId: '', // 选择计划id
            modal: false,  // 是否展示规格弹框
            planActivityList:[], // 选择计划下标
            planActivityIdList: [], // 当前选中计划id
        }
    }

    componentDidMount() {
        var linkParams = new URLSearchParams(this.props.location.search);
        this.setState({
            productId: linkParams.get('id')
        });
        var params = { 'params': '{"productId":"' + linkParams.get('id') + '"}' };
        fetch.productDetails(params).then(res => {
            console.log(res);
            if (res.code === 20000) {
                // 获取默认规格的id
                var planIdList = res.data.prodPlanList[this.state.activityPlan].planAttrKeyList.map(element => {
                    return element.planAttrValList.length == 0 ? 0 : element.planAttrValList[0].id
                })
                console.log(planIdList);
                this.setState({
                    productDetails: res.data,
                    productImg: res.data.prodGoods.goodImg,
                    activityPlanId: res.data.prodPlanList[0].id,
                    planActivityList: new Array(res.data.prodPlanList[this.state.activityPlan].planAttrKeyList.length).fill(0),
                    planActivityIdList: planIdList,
                })
                // 价格试算
                this.priceCalculation();
            }
        })
    }

    // 价格试算
    priceCalculation = () =>{
        fetch.priceCalculation({ params: '{ "productId": "' + this.state.productId + '", "planId": "' + this.state.activityPlanId + '", "value": "' + this.state.planActivityIdList.join() +'" }'}).then(res=>{
            if(res.code == 20000){
                this.setState({
                    price:res.data,
                })
            }else{
                Toast.info(res.message, 1);
            }
        })
    }

    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    setPopup = ()=>{
        this.setState({
            modal: true,
        });
    }

    selectBtn = (pIndex, cIndex, planId)=>{
        var changPlanIndex = this.state.planActivityList;
        var changPlanId = this.state.planActivityIdList;
        // 修改选中计划 id 的下标，渲染dom
        changPlanIndex[pIndex] = cIndex;
        // 修改选中计划的id的数组
        changPlanId[pIndex] = planId;
        this.setState({
            planActivityList: changPlanIndex,
            planActivityIdList: changPlanId
        });
        this.priceCalculation();
    }


    render() {
        return (
            <div className="mainGoods">
                {
                    this.state.productDetails ?
                        <div>
                            <NavBar
                                mode="light"
                                icon={<Icon type="left" />}
                                onLeftClick={() => this.props.history.go(-1)}
                            >产品详情
                            </NavBar>
                            <img className="productImg" src={this.state.defaultImgPath + this.state.productImg} alt="" />
                            <div className="goodsInfo">
                                <span className="goodsName">{this.state.productDetails.prodGoods.goodName}</span>
                                <p className="desc" dangerouslySetInnerHTML={{ __html: this.state.productDetails.prodGoods.goodDetailsPromotionalCopy }}></p>
                            </div>
                            <div className="colorBlock"></div>
                            <div>
                                <div className="sameTitle">
                                    <span className="leftB"></span>
                                    <p className="titleA">保障计划</p>
                                </div>
                                <div style={{ padding: '0 15px 10px' }}>
                                    {
                                        this.state.productDetails.prodPlanList.map((element, index) => {
                                            return <Button type={this.state.activityPlan == index ? "primary" : "ghost"} inline size="small" style={{ marginRight: '8px' }} key={index} onClick={() => {
                                                this.setState({
                                                    activityPlan: index,
                                                    activityPlanId: element.id
                                                })
                                            }}>{element.planName}</Button>
                                        })
                                    }
                                </div>
                            </div>
                            {/* 手风琴 */}
                            <div style={{ marginBottom: 10 }}>
                                <div className="sameTitle">
                                    <span className="leftB"></span>
                                    <p className="titleA">保障清单</p>
                                </div>
                                <Accordion className="my-accordion" onChange={this.onChange}>
                                    {
                                        Object.keys(this.state.productDetails.prodPlanList[this.state.activityPlan].planEnsureDetailMap).length > 0 ?
                                            this.state.productDetails.prodPlanList[this.state.activityPlan].planEnsureDetailMap[this.state.activityPlanId].map((element, index) => {
                                                return <Accordion.Panel header={element.ensureName} key={index}>
                                                    <div dangerouslySetInnerHTML={{ __html: element.ensureContent }} style={{ padding: '10px 20px' }}>
                                                    </div>
                                                </Accordion.Panel>
                                            })
                                            : ''
                                    }
                                </Accordion>
                            </div>
                            {/* 产品介绍 */}
                            <ProductDetailsTab productDetails={this.state.productDetails} />
                            {/* 底部tabbar */}
                            <FlexTab setPopup={this.setPopup} price={this.state.price }/>

                            <Modal
                                popup
                                visible={this.state.modal}
                                onClose={this.onClose('modal')}
                                animationType="slide-up"
                                afterClose={() => { }}
                                closable
                            >
                                <div className="specification">
                                    <WingBlank>
                                        {
                                            this.state.productDetails.prodPlanList[this.state.activityPlan].planAttrKeyList.map((element, pIndex)=>{
                                                return <div className="specificationContent" key={pIndex}>
                                                    <p>{element.attrName}</p>
                                                    {
                                                        element.planAttrValList.map((temp, cIndex)=>{
                                                            return <Button key={cIndex} type={cIndex == this.state.planActivityList[pIndex] ? "primary" : "ghost"} inline size="small" name={temp.id} style={{ marginRight: '10px',marginBottom:'5px' }} onClick={() => { this.selectBtn(pIndex, cIndex, temp.id)} }>{temp.attrValue}</Button>
                                                        })
                                                    }
                                                </div>
                                            })
                                        }
                                    </WingBlank>
                                </div>
                            </Modal>
                        </div>

                        : ''
                }
            </div>
        )
    }
}