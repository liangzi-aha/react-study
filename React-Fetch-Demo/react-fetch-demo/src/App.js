import React from 'react';
import qs from 'querystring';
import ProxyDemo from './ProxyDemo';
import api from './api/index';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      banners:[],
    }
  };

  componentDidMount() {
    /**
     * fetch 基于promise的
     * XMLHttpRequest(XHR)和Fetch是浏览器的原生API
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
     * 
     * get
     */
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php").then(res=>{
      return res.json();
    }).then(data=>{
      this.setState({
        banners: data.banner
      })
    });

    /**
     * post 请求
     */
    fetch("http://iwenwiki.com/api/blueberrypai/login.php",{
      method:'POST',
      headers:{
        'content-Type': 'application/x-www-form-urlencoded',
        "Accept":'application/json,text,plain,*/*'
      },
      body: qs.stringify({
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
      })
    }).then(response => response.json())
    .then(data=>{
      console.log(data);
    })

    // 学习
    api.study({
      cateType: '07',
      page: '1',
      limit: '5',
    }).then(data=>{
      console.log(data);
    });
  }

  render(){
    const { banners } = this.state;
    return (
      <div className="App">
        {
          banners.length > 0 ?
          <ul>
            {
                banners.map((element,index)=>{
                  return <li key={index}>{element.title}</li>
              })
            }
          </ul>
          :
          <div>等待数据加载中....</div>
        }
        <ProxyDemo/>
      </div>
    )
  }
};
