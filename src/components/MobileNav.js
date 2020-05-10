import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from 'components/MenuItem';
import ToggleModal from 'components/ToggleModal';
import { ModalProvider } from 'context/modalContext';

import icons from 'assets/icons-sprite.svg';

const Wrapper = styled.div`
  display: none;
  align-items: stretch;
  flex-direction: column;
  width: 350px;
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  border-style: 1px solid #dfdfdf;
  background-color: white;

  @media only screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Logo = styled.ul`
  height: 17.5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 10vh;
  }
`;

const StyledNav = styled.nav`
  width: 100vh;
`;

const HamburgerIcon = styled.button`
  width: 30px;
  height: 25px;
  border: 0;
  border-top: 5px solid ${(props) => props.theme.darkblue};
  background: transparent;
  position: relative;
  transition: 0.3s transform linear;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 5px solid ${(props) => props.theme.darkblue};
    transform: translateY(5px);
  }

  &:after {
    transform: translateY(15px);
  }
`;

const MobileNav = () => {
  const [isMenuVisible, toggleMenuVisibility] = useState(false);

  return (
    <Wrapper>
      <Logo>
        <HamburgerIcon type="button" onClick={() => toggleMenuVisibility(!isMenuVisible)} />
        <ModalProvider>
          <ToggleModal small />
        </ModalProvider>
      </Logo>
      {isMenuVisible ? (
        <StyledNav>
          <List>
            <li>
              <MenuItem
                exact
                to="/"
                href={`${icons}#dashboard`}
                activeClassName
                onClick={() => toggleMenuVisibility(false)}
              >
                Dashboard
              </MenuItem>
            </li>
            <li>
              <MenuItem
                to="/budget"
                href={`${icons}#budget`}
                activeClassName
                onClick={() => toggleMenuVisibility(false)}
              >
                Budget planner
              </MenuItem>
            </li>
            <li>
              <MenuItem
                to="/transactions"
                href={`${icons}#list-text`}
                activeClassName
                onClick={() => toggleMenuVisibility(false)}
              >
                Trasactions
              </MenuItem>
            </li>
          </List>
        </StyledNav>
      ) : null}
    </Wrapper>
  );
};

export default MobileNav;
