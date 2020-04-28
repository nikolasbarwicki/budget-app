import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SpentChart from 'components/SpentChart';
import BudgetItem from 'components/BudgetItem';
import AddBudgetItem from 'components/AddBudgetItem';
import IncomeInput from 'components/IncomeInput';
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
              key={item.id}
              id={item.id}
            />
          ))}
        </Col>
        <Col lg={3}>
          <Row>
            <Col className="bg-info">
              <IncomeInput />
            </Col>
          </Row>
          <Row>
            <Col>
              <SpentChart />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetPlanner;
