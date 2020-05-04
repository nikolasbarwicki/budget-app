import React from 'react';
import styled from 'styled-components';
import MenuItem from 'components/MenuItem';

import icons from 'assets/icons-sprite.svg';

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

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo>Budgety</Logo>
      <nav>
        <List>
          <li>
            <MenuItem exact to="/" href={`${icons}#dashboard`} activeClassName>
              Dashboard
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/budget" href={`${icons}#budget`} activeClassName>
              Budget planner
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/transactions" href={`${icons}#list-text`} activeClassName>
              Trasactions
            </MenuItem>
          </li>
        </List>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
