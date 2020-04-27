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
  const currMonth = moment().month();

  const { budget, expenses } = useContext(GlobalContext);

  const currBudget = budget[currMonth];
  const currExpenses = expenses[currMonth];

  const calcCategoryExpenses = (cat) => {
    return [...currExpenses.filter(({ category }) => category === cat)].reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 7, offset: 1 }}>
          <AddBudgetItem />
          {currBudget.map((item) => (
            <BudgetItem
              category={item.category}
              amount={item.amount}
              spent={calcCategoryExpenses(item.category)}
            />
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
