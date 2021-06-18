import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,withRouter
} from "react-router-dom";
const NotFound = () => <div className="not_found"><h1>Not Found</h1></div>;
const Found = () => <div className="not_found"><h1> Found</h1></div>;
// const RouteNotFound = () => <Redirect to={{ state: { notFoundError: true } }} />;

const CaptureRouteNotFound = withRouter(({children, location}) => {
  console.log(children, location)
  return location && location.state && location.state.notFoundError ? <NotFound /> : children;
});

const Settings = () => {
  return (
    <div>
    <Switch>
      <Route exact path="/settings/account" render={() => <h1>Account Settings</h1>} />
      <Route exact path="/settings/profile" render={() => <h1>Profile Settings</h1>} />
      <Route exact path="/settings"  component={Found}  />
      <Route  path="*"  component={NotFound} />
      {/* <Redirect to={{ state: { notFoundError: true } }} /> */}
    </Switch>
    </div>

  );
};

const AppShell = ({children}) => {
  return (
    <div className="application">
      <header>Application</header>
      {children}
    </div>
  );
};

const Application = () => {
  return (
    <Router>
      {/* <CaptureRouteNotFound> */}
        <AppShell>
          <Switch>
            <Route  exact path="/settings" component={Settings} />
            <Route exact path="/profile" render={() => <h1>User Profile</h1>} />
            <Route exact path="/" render={() => <h1>Home Profile</h1>} />
            <Route  component={NotFound} />
            {/* <Redirect to={{ state: { notFoundError: true } }} /> */}
            {/* <RouteNotFound /> */}
          </Switch>
        </AppShell>
      {/* </CaptureRouteNotFound> */}
    </Router>
  );
};

export default Application