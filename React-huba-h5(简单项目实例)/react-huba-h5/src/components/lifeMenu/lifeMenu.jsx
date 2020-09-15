import React from 'react';
import './lifeMenu.less';
import fetch from '../../fetch/fetch';
import { Link } from 'react-router-dom';

export default class agentPlan extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            baseImagePath:'https://test.zgbxjj.com'
        }
    }


    componentDidMount() {
        fetch.getProdGoodsList({ params: '{"classTag":"人生必备保单"}'}).then(res=>{
            if(res.code === 20000){
                this.setState({
                    data: res.data,
                })
            }
        })
    }
    

    render() {
        return (
            <div className="life-menu">
                <div className="sameTitle">
                    <span className="leftB"></span>
                    <p className="titleA">人生必备保单</p>
                </div>
                <ul>
                    {
                        this.state.data.map((element,index)=>{
                            return <li key={index}>
                                <Link to={{
                                    pathname:"/productDetails",
                                    search: "?id=" + element.id
                                }}>
                                    <img src={this.state.baseImagePath + element.indexHotProdImg} alt=""/>
                                    <div className="contentBox">
                                        <div className="content">
                                            <p className="productName">{element.goodName}</p>
                                            <p className="productDisc" dangerouslySetInnerHTML={{ __html: element.goodListPromotionalCopy }}></p>
                                        </div>
                                        <p className="productPrice">
                                            ￥{element.minFee}
                                            <span>起</span>
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        })
                    }
                </ul>
                <div className="colorBlock"></div>
            </div >
        )
    }
}