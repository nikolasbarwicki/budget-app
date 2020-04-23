import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LineChart from 'components/LineChart';
import DonutChart from 'components/DonutChart';
import TransactionList from 'components/TransactionList';
import BudgetHistory from 'components/BudgetHistory';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <LineChart />
        </Col>
        <Col>
          <BudgetHistory />
        </Col>
      </Row>
      <Row>
        <Col>
          <TransactionList />
        </Col>
        <Col>
          <DonutChart />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
