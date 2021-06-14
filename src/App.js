import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Home, About, Users,NoPage } from './components'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>

            <Link to="/users">users</Link>
          </li>
        </nav>
      </div>

      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
