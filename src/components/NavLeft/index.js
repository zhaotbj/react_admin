import React, { Component } from 'react'
import { Menu } from 'antd'
import menuConfig from '../../menuConfig'
import './index.scss'
const SubMenu = Menu.SubMenu
export default class NavLeft extends Component {
    state = {
        menuTreeNode: null,
        currentKey: ''
    }
    componentDidMount() {
        const menuTreeNode = this.renderMenu(menuConfig)
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src={require('../../assets/logo512.png')} alt="" />
                    <h1>admin</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}