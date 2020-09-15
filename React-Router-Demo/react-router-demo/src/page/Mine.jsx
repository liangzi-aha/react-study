import React from 'react';
import MyDemo from './MyDemo';

// ES5 函数写法
const Mine = (props)=>{
    console.log(props);
    // const params = new URLSearchParams(props.location.search);
    // console.log('name:' + params.get('name'));

    // const value = qs.parse(props.location.search.substr(1));
    // console.log('name:' + value.name);

    const goHome = ()=>{
        console.log(props);
        // push是在history历史数组中添加一个，replace是替换当前的history记录
        props.history.push('/');
        // props.history.replace('/');
    }

    return(
        <div>
            Mine
            <button onClick={ goHome }>回到home页面</button>
            <MyDemo />
        </div>
    )
}

export default Mine;