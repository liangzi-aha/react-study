import { HttpPost } from './api';

export default {
    getLogin(params) {
        return HttpPost('/openapi/h5/user/login', params);
    },
    // 首页banner
    getadvlistbycid(params) {
        return HttpPost('/openapi/h5/index/getadvlistbycid', params);
    }, 
    // 产品列表  人生必备保单
    getProdGoodsList(params) {
        return HttpPost('/openapi/h5/product/getProdGoodsList', params);
    },
    // 产品详情接口 
    productDetails(params) {
        return HttpPost('/openapi/h5/product/details', params);
    },
    // 展业列表文章 
    studyList(params) {
        return HttpPost('/openapi/classroom/study', params);
    },
    // 价格试算 
    priceCalculation(params) {
        return HttpPost('/openapi/h5/product/priceCalculation', params);
    },
    // 文章详情 
    studyClassroomDetail(params) {
        return HttpPost('/openapi/classroom/studyClassroomDetail', params);
    },
}