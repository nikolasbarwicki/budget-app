import React from 'react';
import TransactionTable from 'components/TransactionTable';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Transactions = () => {
  return (
    <Container fluid>
      <Col lg={{ span: 10, offset: 1 }}>
        <TransactionTable />
      </Col>
    </Container>
  );
};

export default Transactions;
