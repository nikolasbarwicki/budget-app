import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 1.5rem;
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media only screen and (max-width: 420px) {
    border-radius: 0;
  }
`;

const Heading = styled.div`
  background-color: #fff;
  height: 5rem;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
`;

const Title = styled.h4`
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: ${(props) => props.theme.bold};
  margin-left: 3.5rem;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 2rem;
  height: 80%;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const Card = ({ title, children }) => {
  return (
    <Wrapper>
      <Heading>
        <Title>{title}</Title>
      </Heading>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Card;
