// import React from 'react';
import Home from '../components/home';
import Product from '../components/product';
import Mine from '../components/mine';
import Nav from '../components/nav';


const routes = [
    {
        path: '/product',
        component: Product
    },
    {
        path: '/mine',
        component: Mine
    },
    // 切记默认路由 / 一定要放到最后面
    {
        path: '/',
        component: Nav,
        routes: [ // 嵌套路由
            {
                // exact: true,  //加exact表示精确匹配
                path: '/Home',
                component: Home,
            }
        ]
    }
];

export default routes;


