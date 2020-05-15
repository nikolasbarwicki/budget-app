import React from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import LineChart from 'components/Cards/LineChart';
import CategoriesChart from 'components/Cards/CategoriesChart';
import NewTransactionsList from 'components/Cards/TransactionsTable';
import BudgetStatus from 'components/Cards/BudgetStatus';

const Dashboard = () => {
  return (
    <>
      <Header heading="Dashboard" />
      <Card title="Dashboard">
        <LineChart />
      </Card>
      <Card title="Categories">
        <CategoriesChart />
      </Card>
      <Card title="Last transactions">
        <NewTransactionsList noDelete noHead />
      </Card>
      <Card title="Budget status">
        <BudgetStatus />
      </Card>
    </>
  );
};

export default Dashboard;
