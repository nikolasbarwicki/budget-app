import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 10rem;
  display: grid;
  grid-template-columns: 7rem 1fr;
  padding-left: 2rem;
  align-items: center;
  border-top: 1px solid #dfdfdf;
  cursor: pointer;

  &:hover {
    background-color: rgba(77, 124, 254, 0.1);
  }
`;

const Icon = styled.img`
  justify-self: center;
`;

const Text = styled.span`
  font-weight: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.darkblue};
  text-decoration: none !important;
  -webkit-text-decoration: none !important;
`;

const MenuItem = ({ children, src }) => {
  return (
    <Wrapper>
      <Icon src={src} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default MenuItem;
