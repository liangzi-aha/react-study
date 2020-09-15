import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';

// NavLink 和 Link 的区别， NavLink在标签上带一个class="active" 标识，Link 无

const Nav = ()=>{
    return(
        <ul>
            <li>
                {/* activeClassName自定义class名 */}
                <NavLink activeClassName="select" exact to="/">home</NavLink>
            </li>
            <li>
                {/* activeStyle:当前选中的样式 */}
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "blue"
                }} exact to={{
                    pathname:'/mine',
                    search: "?sort=name",
                    hash: "#the-hash",
                    state: { flag: true }  //隐藏传递
                }}>mine</NavLink>
            </li>
            <li>
                <NavLink exact to="/mine/ucenter/1234/亮亮">UCenter</NavLink>
            </li>
        </ul>
    )
}

export default Nav;