import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { fromUnixTime, format } from 'date-fns';

import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';

const TransactionFull = () => {
  const dateFormatter = (cell) => {
    if (!cell) {
      return '';
    }
    return `${format(fromUnixTime(cell), 'dd/MM/yy')}`;
  };

  const amountFormatter = (cell) => {
    if (!cell) {
      return '';
    }
    return `$${cell.toFixed(2)}`;
  };

  const selectOptions = {
    Jedzenie: 'Jedzenie',
    Paliwo: 'Paliwo',
    Alkohol: 'Alkohol',
  };

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      footer: 'footer',
      hidden: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      footer: '',
    },
    {
      dataField: 'category',
      text: 'Category',
      filter: selectFilter({
        options: selectOptions,
      }),
      footer: '',
    },
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
      footer: '',
      formatter: (cell) => dateFormatter(cell),
    },
    {
      dataField: 'amount',
      text: 'Amount',
      sort: true,
      footer: (columnData) => amountFormatter(columnData.reduce((acc, item) => acc + item, 0)),
      formatter: (cell) => amountFormatter(cell),
    },
    {
      dataField: 'actions',
      text: 'Delete',
      isDummyField: true,
      events: {
        onClick: (e, column, columnIndex, row) => {
          console.log(row.id);
        },
      },
      formatter: () => {
        return (
          <span role="img" aria-label="delete" style={{ cursor: 'pointer' }}>
            ❌
          </span>
        );
      },
      headerStyle: { width: '70px', align: 'center' },
      align: 'center',
    },
  ];

  const products = [
    { id: 1, name: 'Biedronka', category: 'Jedzenie', date: 1587340800, amount: 18 },
    { id: 2, name: 'Biedrona', category: 'Jedzenie', date: 1585094400, amount: 14 },
    { id: 3, name: 'Biednka', category: 'Paliwo', date: 1580860800, amount: 13 },
    { id: 4, name: 'Biedonka', category: 'Alkohol', date: 1577836800, amount: 15 },
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
        filter={filterFactory()}
        bordered
      />
    </div>
  );
};

export default TransactionFull;
