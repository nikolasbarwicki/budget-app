import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Sidebar from 'components/Sidebar';
import Dashboard from 'views/Dashboard';

import { GlobalProvider } from 'context/GlobalState';
import GlobalStyle from 'theme/GlobalStyle';

import { theme } from 'theme/mainTheme';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Grid = styled.div`
  background-color: #f7f8fc;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 56px 1fr 1fr;
  grid-gap: 50px;
  padding: 40px 80px;
`;

const Root = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Sidebar />
          <Grid>
            <Dashboard />
          </Grid>
        </Wrapper>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default Root;
