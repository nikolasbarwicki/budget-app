import React from 'react';
import styled, { css } from 'styled-components';

const OuterWrapper = styled.div`
  height: 1.1rem;
  width: 15vw;
  background-color: ${(props) => props.theme.gray};
  border-radius: 2rem;
  margin: 0 3.5rem;
  overflow: hidden;

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: ${(props) => props.theme.blue};

  ${({ width }) =>
    width >= 100 &&
    css`
      background-color: ${(props) => props.theme.red};
    `}
`;

const ProgressBar = ({ width }) => {
  return (
    <OuterWrapper>
      <InnerWrapper width={width} />
    </OuterWrapper>
  );
};

export default ProgressBar;
