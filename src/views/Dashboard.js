import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LineChart from 'components/LineChart';
import CategoriesChart from 'components/CategoriesChart';
import TransactionsTableSmall from 'components/TransactionsTableSmall';
import SpentChart from 'components/SpentChart';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 6, offset: 1 }}>
          <LineChart />
        </Col>
        <Col lg={4}>
          <SpentChart />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 6, offset: 1 }}>
          <TransactionsTableSmall />
        </Col>
        <Col lg={4}>
          <CategoriesChart />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
