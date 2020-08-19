import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardModule from "./pages/DashboardModule"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ DashboardModule } />
      </Switch>
    </Router>
  );
}

export default App;
