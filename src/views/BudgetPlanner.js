import React from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import BudgetItems from 'components/BudgetCategories/BudgetItems';
import BudgetOptions from 'components/Cards/BudgetOptions';
import BudgetStatus from 'components/Cards/BudgetStatus';

const BudgetPlanner = () => {
  return (
    <>
      <Header heading="Budget planner" />
      <Card title="Budget categories" gridArea="mainTop / mainTop / mainBottom / mainTop">
        <BudgetItems />
      </Card>
      <Card title="Options" gridArea="secondaryTop">
        <BudgetOptions />
      </Card>
      <Card title="Budget status" gridArea="secondaryBottom">
        <BudgetStatus />
      </Card>
    </>
  );
};

export default BudgetPlanner;
