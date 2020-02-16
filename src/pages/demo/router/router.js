import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        {/* 嵌套二级路由 */}
                        <Route path="/user"
                            render={
                                () =>
                                    <User>
                                        <Route path="/user/add/:id" component={AddUser}></Route>
                                    </User>
                            }
                        ></Route>
                        {/* 配置404页面 需要配和switch组件 匹配不上的就会显示404组件 */}
                        <Route component={NotFond}></Route>
                    </Switch>
                </Home>
            </HashRouter>
        );
    }
}
// 一级
const User = (props) => {

    return (
        <div>===我是user===
            <Link to="/user/add/456">去子组件</Link>
            <br />
            {/* 出口 */}
            {props.children}
        </div>
    )
}
// 二级路由 及获取动态路由参数
// 在props.match.params 接收
const AddUser = (props) => {
    console.log(props.match)
    return (
        <div>======我是user的子组件 AddUser===动态参数{props.match.params.id}=======</div>
    )
}

const NotFond = () => {
    return (
        <div>not found</div>
    )
}
const Main = () => {
    return (
        <div>this is Main =========</div>
    )
}
const About = () => {
    return (
        <div>this is About =========</div>
    )
}
const Topic = () => {
    return (
        <div>this is Topic =========</div>
    )
}
export default Router;