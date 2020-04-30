import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuItem from 'components/MenuItem';

import budgetIcon from 'assets/budgetIcon.png';
import dashboardIcon from 'assets/dashboardIcon.png';
import transactionsIcon from 'assets/transactionsIcon.png';

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 350px;
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  border-style: 1px solid #dfdfdf;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Logo = styled.ul`
  height: 17.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo>Budgety</Logo>
      <nav>
        <List>
          <li>
            <StyledNavLink to="/">
              <MenuItem src={dashboardIcon}>Dashboard</MenuItem>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/budget">
              <MenuItem src={budgetIcon}>Budget planner</MenuItem>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/transactions" activeclass="active">
              <MenuItem src={transactionsIcon}>Trasactions</MenuItem>
            </StyledNavLink>
          </li>
        </List>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
