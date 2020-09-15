import { httpGet,httpPost } from '../utils/http';

/**
 * 有多少的网络请求，一次性就看到了
 * redux: action集中在一起
 */
const api = {
    study(params){
        return httpPost('/openapi/classroom/study', params);
    },
}

export default api;