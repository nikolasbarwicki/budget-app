import React, { useContext } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import moment from 'moment';
import styled from 'styled-components';

import { GlobalContext } from 'context/GlobalState';

const Wrapper = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
`;

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

const SmallTransactionList = () => {
  const amountFormatter = (cell) => {
    if (!cell) {
      return '';
    }
    return `$${cell.toFixed(2)}`;
  };

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      hidden: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      headerFormatter: priceFormatter,
      headerStyle: { position: 'sticky', top: 0, backgroundColor: '#fff' },
    },
    {
      dataField: 'category',
      text: 'Category',
      headerFormatter: priceFormatter,
      headerStyle: { position: 'sticky', top: 0, backgroundColor: '#fff' },
    },
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== 'object') {
          dateObj = new Date(cell);
        }
        return `${moment(dateObj).format('D/MM/YY')}`;
      },
      headerFormatter: priceFormatter,
      headerStyle: { position: 'sticky', top: 0, backgroundColor: '#fff' },
    },
    {
      dataField: 'amount',
      text: 'Amount',
      sort: true,
      formatter: (cell) => amountFormatter(cell),
      headerStyle: {
        width: '100px',
        align: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: 'date',
      order: 'desc',
    },
  ];

  const currYear = moment().year();
  const currMonth = moment().month();

  const { expenses } = useContext(GlobalContext);

  const currExpenses = expenses[currYear][currMonth];

  return (
    <Wrapper>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={currExpenses}
        columns={columns}
        defaultSorted={defaultSorted}
        bordered={false}
      />
    </Wrapper>
  );
};

export default SmallTransactionList;
