import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

const TransactionFull = () => {
  const columns = [
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'category',
      text: 'Category',
    },
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
    },
    {
      dataField: 'amount',
      text: 'Amount',
    },
  ];

  const products = [
    { name: 'Biedronka', category: 'Food', date: '21/04/19', amount: '$18' },
    { name: 'Biedronka', category: 'Food', date: '30/02/20', amount: '$14' },
    { name: 'Biedronka', category: 'Food', date: '01/04/21', amount: '$13' },
    { name: 'Biedronka', category: 'Food', date: '23/12/18', amount: '$15' },
  ];

  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc',
    },
  ];

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
      />
    </div>
  );
};

export default TransactionFull;
