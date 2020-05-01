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

  &.active {
    background-color: rgba(77, 124, 254, 0.1);
    color: red !important;
  }

  &:hover {
    background-color: rgba(77, 124, 254, 0.1);
  }
`;

const Icon = styled.img`
  justify-self: center;
  color: ${(props) => props.theme.darkblue};
`;

const Text = styled.span`
  font-weight: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.darkblue};
  text-decoration: none !important;
  -webkit-text-decoration: none !important;
`;

const MenuItem = ({ children, src, to }) => {
  return (
    <Wrapper to={to}>
      <Icon src={src} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default MenuItem;
