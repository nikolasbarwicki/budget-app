import React from 'react';
import Table from 'react-bootstrap/Table';

const TransactionList = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Biedronka</td>
          <td>Jedzenie</td>
          <td>22/04/2020</td>
          <td>$15.60</td>
        </tr>
        <tr>
          <td>Biedronka</td>
          <td>Jedzenie</td>
          <td>22/04/2020</td>
          <td>$15.60</td>
        </tr>
        <tr>
          <td>Biedronka</td>
          <td>Jedzenie</td>
          <td>22/04/2020</td>
          <td>$15.60</td>
        </tr>
        <tr>
          <td>Biedronka</td>
          <td>Jedzenie</td>
          <td>22/04/2020</td>
          <td>$15.60</td>
        </tr>
        <tr>
          <td>Biedronka</td>
          <td>Jedzenie</td>
          <td>22/04/2020</td>
          <td>$15.60</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TransactionList;
