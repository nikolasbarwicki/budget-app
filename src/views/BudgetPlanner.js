import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BudgetHistory from 'components/BudgetHistory';
import BudgetItem from 'components/BudgetItem';
import AddBudgetItem from 'components/AddBudgetItem';
import Income from 'components/Income';

const BudgetPlanner = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 7, offset: 1 }}>
          <AddBudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
        </Col>
        <Col lg={3}>
          <Row>
            <Col className="bg-info">
              <Income />
            </Col>
          </Row>
          <Row>
            <Col>
              <BudgetHistory />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetPlanner;
