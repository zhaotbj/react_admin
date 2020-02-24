import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin'
import Buttons from './pages/ui/button'
import NoMatch from './pages/noMatch'
import Modals from './pages/ui/modals'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HeighTable from './pages/table/highTable'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
class IRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    {/* 最外层和登录同级 */}
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:id" component={OrderDetail} />
                        </Common>
                    }/>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/button" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/register" component={FormRegister}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/height" component={HeighTable}></Route>
                                <Route path="/admin/order" component={Order}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    
                    
                </App>
            </HashRouter>
        );
    }
}


export default IRouter;