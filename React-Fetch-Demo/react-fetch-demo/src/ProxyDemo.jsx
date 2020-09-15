import React from 'react';
import qs from 'querystring';

export default class ProxyDemo extends React.Component{

    constructor(porps){
        super(porps);
    }

    /**
     * https://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0
     */

     /**
      * 跨域的解决方案
      *     开发模式下：
      *         利用环境解决：react vue常用框架，代理
      *     生成模式下：
      *         jsonp cors iframe postMessage
      */

    componentDidMount() {
        /**
         * 跨域请求
         */
        // fetch('/apc/openapi/h5/index/getInsuranceClassroom',{
        //     method: 'POST',
        //     body: qs.stringify({ "cateval": "30" })
        // }).then(res=>res.json()).then(data=>{
        //     console.log(data);
        // }).catch(error=>{
        //     console.error(error);
        // });

        // // 多个代理配置
        // fetch('/api/list').then(res => res.json()).then(data => {
        //     console.log(data);
        // }).catch(error => {
        //     console.error(error);
        // })
    }
    

    render(){
        return(
            <div>
                fetch跨域请求
            </div>
        )
    }
}