import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BudgetHistory from 'components/BudgetHistory';
import BudgetItem from 'components/BudgetItem';
import AddBudgetItem from 'components/AddBudgetItem';
import Income from 'components/Income';
import { GlobalContext } from 'context/GlobalState';
import moment from 'moment';

const BudgetPlanner = () => {
  const currYear = moment().year();
  const currMonth = moment().month();

  const { budget } = useContext(GlobalContext);

  const currBudget = budget[currYear][currMonth];

  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 7, offset: 1 }}>
          <AddBudgetItem />
          {currBudget.map((item) => (
            <BudgetItem category={item.category} amount={item.amount} />
          ))}
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
