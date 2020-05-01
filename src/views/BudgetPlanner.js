import React from 'react';
import styled from 'styled-components';
import ToggleModal from 'components/ToggleModal';

import Card from 'components/Card';
import { ModalProvider } from 'context/modalContext';
import CategoriesChart from 'components/CategoriesChart';

const Header = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.l};
`;

const Left = styled.div`
  grid-column: 1 / span 6;
  grid-row: 2 / span 2;
`;

const TopRight = styled.div`
  grid-column: 7 / span 3;
`;

const BottomRight = styled.div`
  grid-column: 7 / span 3;
`;

const Dashboard = () => {
  return (
    <>
      <Header>
        <Heading>Budget planner</Heading>
        <ModalProvider>
          <ToggleModal />
        </ModalProvider>
      </Header>
      <Left>
        <Card title="Budget categories">content</Card>
      </Left>
      <TopRight>
        <Card title="Options">dupa</Card>
      </TopRight>
      <BottomRight>
        <Card title="Budget status">
          <CategoriesChart />
        </Card>
      </BottomRight>
    </>
  );
};

export default Dashboard;
