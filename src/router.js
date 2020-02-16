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
                    <Route path="/" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/ui/button" component={Buttons}></Route>
                                <Route path="/ui/modals" component={Modals}></Route>
                                <Route path="/form/login" component={FormLogin}></Route>
                                <Route path="/form/register" component={FormRegister}></Route>
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