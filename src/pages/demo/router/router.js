import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
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
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                    {/* 嵌套二级路由 */}
                    <Route path="/user"
                        render={
                            () =>
                                <User>
                                    <Route path="/user/add" component={AddUser}></Route>
                                </User>
                        }
                    ></Route>
                </Home>
            </HashRouter>
        );
    }
}
// 一级
const User = (props) => {
    console.log(props.children, ' -----')
    return (
        <div>===我是user===
            <Link to="/user/add">去子组件</Link>
            <br />
            {props.children}
        </div>
    )
}
// 二级路由
const AddUser = () => <div>======我是user的子组件 AddUser==========</div>


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