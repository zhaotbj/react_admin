import React, { Component } from 'react'
import { Row,Col } from 'antd'
import './index.scss'
export default class Header extends Component {
    render(){
        const {menuType} = this.props
        return (
            <div className="header" style={menuType?{'backgroundColor':'rgb(12, 127, 244)',color:'#fff'}:{}}>
                <Row className="header-top">
                    {
                        menuType?<Col span={6} className="common_log">
                            <img   src={require('../../assets/common_log.png')} alt="" />
                            <span>通用组件header</span>
                        </Col> :''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，嘻嘻嘻</span>
                        <a href="##">退出</a>
                    </Col>
                </Row>
               { menuType? "" :<Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        面包屑
                    </Col>
                    <Col span={20} className="weatch">
                        <span>2020-2-15</span>
                        <span>晴</span>
                    </Col>
                </Row>}
            </div>
        )
    }
}