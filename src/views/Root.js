import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from 'components/Navigation';
import Dashboard from 'views/Dashboard';
import BudgetPlanner from 'views/BudgetPlanner';
import Transactions from 'views/Transactions';

import { GlobalProvider } from 'context/GlobalState';

const App = () => (
  <>
    <Router>
      <GlobalProvider>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/budget">
            <BudgetPlanner />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
        </Switch>
      </GlobalProvider>
    </Router>
  </>
);

export default App;
