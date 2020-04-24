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
    <Container fluid>
      <Row>
        <Col lg={{ span: 6, offset: 1 }}>
          <LineChart />
        </Col>
        <Col lg={4}>
          <BudgetHistory />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 6, offset: 1 }}>
          <TransactionList />
        </Col>
        <Col lg={4}>
          <DonutChart />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
