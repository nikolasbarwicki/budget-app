import React from 'react';
import TransactionFull from 'components/TransactionFull';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Transactions = () => {
  return (
    <Container fluid>
      <Col lg={{ span: 10, offset: 1 }}>
        <TransactionFull />
      </Col>
    </Container>
  );
};

export default Transactions;
