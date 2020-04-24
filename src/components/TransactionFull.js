import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import moment from 'moment';

import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {
  selectFilter,
  textFilter,
  dateFilter,
  Comparator,
} from 'react-bootstrap-table2-filter';

let inStockDateFilter;

function priceFormatter(column, colIndex, { sortElement, filterElement }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        {column.text}
        {sortElement}
      </div>
      {filterElement}
    </div>
  );
}

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
      filter: textFilter(),
      headerFormatter: priceFormatter,
    },
    {
      dataField: 'category',
      text: 'Category',
      filter: selectFilter({
        options: selectOptions,
      }),
      footer: '',
      headerFormatter: priceFormatter,
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
        return `${moment(dateObj).format('D/MM/YY')}`;
      },
      filter: dateFilter({
        style: { display: 'none' },
        getFilter: (filter) => {
          // inStockDateFilter was assigned once the component has been mounted.
          inStockDateFilter = filter;
        },
      }),
      headerFormatter: priceFormatter,
    },
    {
      dataField: 'amount',
      text: 'Amount',
      sort: true,
      footer: (columnData) => amountFormatter(columnData.reduce((acc, item) => acc + item, 0)),
      formatter: (cell) => amountFormatter(cell),
      headerStyle: { width: '100px', align: 'center' },
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
    { id: 1, name: 'Biedronka', category: 'Jedzenie', date: '2020-04-24', amount: 18 },
    { id: 2, name: 'Biedrona', category: 'Jedzenie', date: '2020-04-15', amount: 14 },
    { id: 3, name: 'Biednka', category: 'Paliwo', date: '2020-04-23', amount: 13 },
    { id: 4, name: 'Biedonka', category: 'Alkohol', date: '2020-03-02', amount: 15 },
    { id: 5, name: 'dzsiaij', category: 'Alkohol', date: '2020-01-15', amount: 11 },
  ];

  const defaultSorted = [
    {
      dataField: 'date',
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

  const noFilter = () => {
    inStockDateFilter({
      date: new Date(moment()),
      comparator: Comparator.LE,
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
      <button type="button" onClick={noFilter}>
        All data
      </button>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
        filter={filterFactory()}
        bordered={false}
        filterPosition="inline"
      />
    </div>
  );
};

export default TransactionFull;
