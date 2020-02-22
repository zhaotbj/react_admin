import React, { Component } from 'react'
import { Row,Col } from 'antd'
import './index.scss'
export default class Header extends Component {
    componentDidMount(){
        
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，嘻嘻嘻</span>
                        <a href="##">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weatch">
                        <span>2020-2-15</span>
                        <span>晴</span>
                    </Col>
                </Row>
            </div>
        )
    }
}