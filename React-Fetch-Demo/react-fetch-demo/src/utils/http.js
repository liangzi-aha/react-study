/**
 * get post请求封装
 */
import qs from 'querystring';

console.log(process.env.NODE_ENV);
const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : '';

 export function httpGet(url) {
     const result = fetch(baseUrl + url);
     return result;
 }

export function httpPost(url,params) {
    const result = fetch(baseUrl + url,{
        method: 'POST',
        headers: {
            'content-Type': 'application/x-www-form-urlencoded',
        },
        body:qs.stringify(params)
    });
    return result;
}