import React from 'react';
import styled from 'styled-components';
import ToggleModal from 'components/Modal/ToggleModal';
import { ModalProvider } from 'context/modalContext';

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
    visibility: hidden;
  }
`;

const StyledHeading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.l};
`;

const Header = ({ heading }) => {
  return (
    <StyledHeader>
      <StyledHeading>{heading}</StyledHeading>
      <ModalProvider>
        <ToggleModal />
      </ModalProvider>
    </StyledHeader>
  );
};

export default Header;
