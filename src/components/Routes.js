import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import * as createHistory from "history";
import { connect } from "react-redux";

import { actFullLogIn } from "../store/actions/authorization/actFullLogIn";
import { actFullReg } from "../store/actions/authorization/actFullReg";
import { LoginForm } from "../pages/Login";
import { RegForm } from "../pages/Registration";
import Main from "../pages/main";
import { AppArea } from "../pages/AppArea";
import ConnectedSnippets from "../pages/AllSnippets";
import ConnectedSnippet from "../pages/MySnippet";
import { WorkPage } from "../pages/WorkPage";

const history = createHistory.createBrowserHistory();

const ConnectLoginForm = connect(null, { onLogin: actFullLogIn })(LoginForm);
const ConnectFormReg = connect(null, { Reg: actFullReg })(RegForm);

const Routs = ({ token }) => {
  return (
    <div className="App">
      <Router history={history}>
        {token && (
          <Switch>
            <Redirect from="/login" to="/area" />
            <Redirect from="/reg" to="/area" />
            <Route exact path="/area" component={WorkPage} />
            <Route path="/snippets" component={ConnectedSnippets} />
            <Route path="/snippet/:id" component={ConnectedSnippet} />
          </Switch>
        )}
        {!token && (
          <Switch>
            <Route path="/area" component={AppArea} />
            <Route path="/login" component={ConnectLoginForm} />
            <Route path="/reg" component={ConnectFormReg} />
            <Route path="/" component={Main} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

const ConnectedRouts = connect(
  (state) => ({ token: state.auth.token }),
  null
)(Routs);

export default ConnectedRouts;
