import React from 'react';
import fetch from '../fetch/fetch';
import { Carousel, WingBlank } from 'antd-mobile';

export default class Banner extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            bannerImagePath: 'https://test.zgbxjj.com/hsFileData'
        }
    }

    // 加载成功
    componentDidMount() {
        fetch.getadvlistbycid({ params: '{ "acid": "74" }' }).then(res => {
            var bannerList = res.data.map(item=>{
                return item.adv_content_pic.replace('fs:', this.state.bannerImagePath)
            });

            this.setState({
                data: bannerList,
            })
        })
    }


    render() {
        return (
            <div>
                <WingBlank style={{margin:0,padding:0}}>
                    <Carousel
                        autoplay
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.setState({ slideIndex: index })}
                    >
                        {this.state.data.map((val, index) => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}