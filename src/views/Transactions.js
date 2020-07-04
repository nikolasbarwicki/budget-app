import React, { useState } from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import NewTransactionsList from 'components/Cards/TransactionsTable';
import TableFiltering from 'components/TableFiltering';
import BudgetStatus from 'components/Cards/BudgetStatus';

const Transactions = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [nameSearch, setNameSearch] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);

  console.log(dateFilter);

  return (
    <>
      <Header heading="Dashboard" />
      <Card
        title="Transactions"
        gridArea="mainTop / mainTop / mainBottom / mainTop"
      >
        <NewTransactionsList
          dateFilter={dateFilter}
          nameSearch={nameSearch}
          categoryFilter={categoryFilter}
        />
      </Card>
      <Card title="Filtering options" gridArea="secondaryTop">
        <TableFiltering
          categoryFilter={categoryFilter}
          nameSearch={nameSearch}
          dateFilter={dateFilter}
          setCategoryFilter={(value) => setCategoryFilter(value)}
          setNameSearch={(value) => setNameSearch(value)}
          setDateFilter={(value) => setDateFilter(value)}
        />
      </Card>
      <Card title="Budget status" gridArea="secondaryBottom">
        <BudgetStatus />
      </Card>
    </>
  );
};

export default Transactions;
