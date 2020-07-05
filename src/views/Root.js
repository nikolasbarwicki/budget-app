import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Dashboard from 'views/Dashboard';
import BudgetPlanner from 'views/BudgetPlanner';
import Transactions from 'views/Transactions';

import { GlobalProvider } from 'context/GlobalState';
import GlobalStyle from 'theme/GlobalStyle';

import { theme } from 'theme/mainTheme';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Grid = styled.main`
  min-height: 100vh;
  background-color: #f7f8fc;
  width: calc(100vw - 300px);
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 56px 1fr 1fr;

  grid-template-areas:
    'header header'
    'mainTop secondaryTop'
    'mainBottom secondaryBottom';

  @media only screen and (max-width: 1200px) {
    grid-gap: 20px;
    padding: 40px 40px;

    width: 100%;
    grid-template-columns: 1fr;

    grid-template-areas:
      'header'
      'mainTop'
      'mainBottom'
      'secondaryTop'
      'secondaryBottom';
  }

  @media only screen and (max-width: 576px) {
    grid-gap: 20px;
    padding: 40px 0;
  }

  @media only screen and (min-width: 1200px) {
    grid-gap: 20px;
    padding: 40px 40px;
  }
`;

const Root = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <BrowserRouter>
            <Sidebar />
            <Grid>
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/budget" component={BudgetPlanner} />
                <Route path="/transactions" component={Transactions} />
                <Route component={Error} />
              </Switch>
            </Grid>
          </BrowserRouter>
        </Wrapper>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default Root;
