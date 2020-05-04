import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled(NavLink)`
  height: 10rem;
  display: grid;
  grid-template-columns: 7rem 1fr;
  padding-left: 2rem;
  align-items: center;
  border-top: 1px solid #dfdfdf;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: background-color 0.3s;

  &.active {
    background-color: rgba(77, 124, 254, 0.1);

    & > svg {
      fill: ${(props) => props.theme.blue};

      transition: fill 0.3s;
    }

    & > span {
      color: ${(props) => props.theme.blue};
      transition: color 0.3s;
    }
  }

  &:hover {
    background-color: rgba(77, 124, 254, 0.1);
  }
`;

const Icon = styled.svg`
  width: 2.5rem;
  justify-self: center;
  fill: #b6b8c0;
  outline: none;

  &.active {
    background-color: rgba(77, 124, 254, 0.1);
    fill: ${(props) => props.theme.blue};
  }
`;

const Text = styled.span`
  font-weight: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.darkblue};
  text-decoration: none !important;
  -webkit-text-decoration: none !important;
`;

const MenuItem = ({ children, href, to }) => {
  return (
    <Wrapper exact to={to}>
      <Icon>
        <use href={href} />
      </Icon>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default MenuItem;
