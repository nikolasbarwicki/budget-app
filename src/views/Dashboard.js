import React from 'react';
import styled from 'styled-components';
import ToggleModal from 'components/ToggleModal';
import LineChart from 'components/LineChart';
import NewTransactionsList from 'components/NewTransactionsList';
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

const TopLeft = styled.div`
  grid-column: 1 / span 6;
`;

const TopRight = styled.div`
  grid-column: 7 / span 3;
`;

const BottomLeft = styled.div`
  grid-column: 1 / span 6;
`;

const BottomRight = styled.div`
  grid-column: 7 / span 3;
`;

const Dashboard = () => {
  return (
    <>
      <Header>
        <Heading>Dashboard</Heading>
        <ModalProvider>
          <ToggleModal />
        </ModalProvider>
      </Header>
      <TopLeft>
        <Card title="Dashboard">
          <LineChart />
        </Card>
      </TopLeft>
      <TopRight>
        <Card title="Categories">
          <CategoriesChart />
        </Card>
      </TopRight>
      <BottomLeft>
        <Card title="Last transactions">
          <NewTransactionsList noDelete noHead />
        </Card>
      </BottomLeft>
      <BottomRight>
        <Card title="Budget status">Budget status</Card>
      </BottomRight>
    </>
  );
};

export default Dashboard;
