import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 350px;
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  border-style: 1px solid #dfdfdf;
`;

const Sidebar = () => {
  return <Wrapper>Sidebar</Wrapper>;
};

export default Sidebar;
