import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardModule from "./pages/DashboardModule"
import DashboardTest from "./pages/DashboardTest"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ DashboardModule } />
        <Route path='/test' component={ DashboardTest } />
      </Switch>
    </Router>
  );
}

export default App;
