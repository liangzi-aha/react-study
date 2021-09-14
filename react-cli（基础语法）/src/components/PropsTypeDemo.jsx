import React from 'react';
import PropTypes from 'prop-types';

export default class PropsTypeDemo extends React.Component{
    render(){
        return(
            <div>
                PropsTypeDemo: {this.props.title }
            </div>
        )
    }
}

// 属性类型摊子
PropsTypeDemo.propTypes = {
    title: PropTypes.string.isRequired
}

// 指定 props 的默认值：
PropsTypeDemo.defaultProps = {
    title: '默认标题'
};