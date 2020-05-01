import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleModal from 'components/ToggleModal';
import Card from 'components/Card';
import NewTransactionsList from 'components/NewTransactionsList';
import TableFiltering from 'components/TableFiltering';

import { ModalProvider } from 'context/modalContext';

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

const Transactions = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [nameSearch, setNameSearch] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);

  return (
    <>
      <Header>
        <Heading>Transactions</Heading>
        <ModalProvider>
          <ToggleModal />
        </ModalProvider>
      </Header>
      <Left>
        <Card title="Transactions">
          <NewTransactionsList
            dateFilter={dateFilter}
            nameSearch={nameSearch}
            categoryFilter={categoryFilter}
          />
        </Card>
      </Left>
      <TopRight>
        <Card title="Filtering options">
          <TableFiltering
            categoryFilter={categoryFilter}
            nameSearch={nameSearch}
            dateFilter={dateFilter}
            setCategoryFilter={(value) => setCategoryFilter(value)}
            setNameSearch={(value) => setNameSearch(value)}
            setDateFilter={(value) => setDateFilter(value)}
          />
        </Card>
      </TopRight>
      <BottomRight>
        <Card title="Budget status">inne</Card>
      </BottomRight>
    </>
  );
};

export default Transactions;
