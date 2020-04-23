import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import moment from 'moment';

import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter, dateFilter, Comparator } from 'react-bootstrap-table2-filter';

let inStockDateFilter;

const TransactionFull = () => {
  // const dateFormatter = (cell) => {
  //   if (!cell) {
  //     return '';
  //   }
  //   return `${fromUnixTime(cell)}`;
  // };

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
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== 'object') {
          dateObj = new Date(cell);
        }
        return `${moment(dateObj).format('D/M/YY')}`;
      },
      filter: dateFilter({
        getFilter: (filter) => {
          // inStockDateFilter was assigned once the component has been mounted.
          inStockDateFilter = filter;
        },
      }),
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
    { id: 1, name: 'Biedronka', category: 'Jedzenie', date: '2020-04-29', amount: 18 },
    { id: 2, name: 'Biedrona', category: 'Jedzenie', date: '2020-04-28', amount: 14 },
    { id: 3, name: 'Biednka', category: 'Paliwo', date: '2020-04-23', amount: 13 },
    { id: 4, name: 'Biedonka', category: 'Alkohol', date: '2020-03-02', amount: 15 },
    { id: 5, name: 'dzsiaij', category: 'Alkohol', date: '2020-04-23', amount: 11 },
  ];

  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc',
    },
  ];

  const filterDay = () => {
    inStockDateFilter({
      date: new Date(moment()),
      comparator: Comparator.EQ,
    });
  };

  const filterWeek = () => {
    inStockDateFilter({
      date: new Date(moment('2020-04-20')),
      comparator: Comparator.GT,
    });
  };

  const filterMonth = () => {
    inStockDateFilter({
      date: new Date(moment('2020-04-01')),
      comparator: Comparator.GT,
    });
  };

  return (
    <div>
      <button type="button" onClick={filterDay}>
        Today
      </button>
      <button type="button" onClick={filterWeek}>
        This week
      </button>
      <button type="button" onClick={filterMonth}>
        This month
      </button>
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
