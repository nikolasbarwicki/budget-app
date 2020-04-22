import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import LineChart from 'components/LineChart';
import DonutChart from 'components/DonutChart';

const App = () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={3} lg={2} className="bg-primary">
        Sidebar
      </Col>
      <Col>
        <Container fluid>
          <Row>
            <Col md={12} lg={8}>
              <LineChart />
            </Col>
            <Col md={12} lg={4} className="bg-warning">
              2
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={4}>
              <DonutChart />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default App;
