import React, { useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import moment from 'moment';
import styled from 'styled-components';
import deleteIcon from 'assets/deleteIcon.png';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const StyledTable = styled.table`
  width: 90%;
`;

const StyledTr = styled.tr`
  height: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.gray};
`;

const StyledTd = styled.td`
  border-bottom: 1px solid ${(props) => props.theme.gray};
  text-align: center;

  ${(props) =>
    props.bold &&
    `
    font-weight: ${props.theme.bold}
  `}
`;

const StyledDelete = styled.button`
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;
`;

const StyledSortButton = styled.button`
  border: none;
  background: none;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  cursor: pointer;
`;

const ProductTable = ({
  data,
  categoryFilter,
  nameSearch,
  dateFilter,
  deleteTransaction,
  noDelete,
}) => {
  const { items, requestSort, sortConfig } = useSortableData(data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const filterItems = (array, catFilter, term, date) => {
    return array.filter((item) => {
      return (
        (catFilter ? item.category === catFilter : true) &&
        (term ? item.name.includes(term) : true) &&
        (date ? moment.unix(item.date).format('DD/MM/YYYY') >= date : true)
      );
    });
  };

  const filtered = filterItems(items, categoryFilter, nameSearch, dateFilter);

  return (
    <StyledTable>
      {noDelete ? null : (
        <thead>
          <tr>
            <th>
              <StyledSortButton
                type="button"
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
              >
                Name
              </StyledSortButton>
            </th>
            <th>
              <StyledSortButton
                type="button"
                onClick={() => requestSort('category')}
                className={getClassNamesFor('category')}
              >
                Category
              </StyledSortButton>
            </th>
            <th>
              <StyledSortButton
                type="button"
                onClick={() => requestSort('date')}
                className={getClassNamesFor('date')}
              >
                Date
              </StyledSortButton>
            </th>
            <th>
              <StyledSortButton
                bold
                type="button"
                onClick={() => requestSort('amount')}
                className={getClassNamesFor('amount')}
              >
                Amount
              </StyledSortButton>
            </th>
            <th>Delete</th>
          </tr>
        </thead>
      )}

      {noDelete ? (
        <tbody>
          {filtered.splice(1, 6).map((item) => (
            <StyledTr key={item.id}>
              <StyledTd>{item.name}</StyledTd>
              <StyledTd>{item.category}</StyledTd>
              <StyledTd>{moment(item.date).format('DD/MM/YYYY')}</StyledTd>
              <StyledTd bold>${item.amount.toFixed(2)}</StyledTd>
            </StyledTr>
          ))}
        </tbody>
      ) : (
        <tbody>
          {filtered.map((item) => (
            <StyledTr key={item.id}>
              <StyledTd>{item.name}</StyledTd>
              <StyledTd>{item.category}</StyledTd>
              <StyledTd>{moment(item.date).format('DD/MM/YYYY')}</StyledTd>
              <StyledTd bold>${item.amount.toFixed(2)}</StyledTd>
              <StyledTd>
                <StyledDelete type="button" onClick={() => deleteTransaction(item.id)} />
              </StyledTd>
            </StyledTr>
          ))}
        </tbody>
      )}
    </StyledTable>
  );
};

export default function App({ dateFilter, nameSearch, categoryFilter, noDelete }) {
  const { expenses, deleteTransaction } = useContext(GlobalContext);

  const currExpenses = expenses[4];

  return (
    <ProductTable
      dateFilter={dateFilter}
      nameSearch={nameSearch}
      categoryFilter={categoryFilter}
      data={currExpenses}
      deleteTransaction={deleteTransaction}
      noDelete={noDelete}
    />
  );
}
