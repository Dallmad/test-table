import React, { memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Table.module.scss';

import { ReturnComponentType } from 'common';
import { Modal, Paginator } from 'components';
import { AddItem, TableHeader, TableRow } from 'features';
import { Filtration } from 'features/filtration/Filtration';
import { useFiltration } from 'hooks/useFiltration';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { AppRootStateType } from 'state';
import {
  fetchItems,
  FiltrationType,
  setFiltration,
  TableType,
} from 'state/reducers/table/table-reducer';

export const Table = memo((): ReturnComponentType => {
  const dispatch = useDispatch();

  const items = useSelector<AppRootStateType, TableType>(state => state.table.table);
  const sort = useSelector<AppRootStateType, string>(state => state.table.sort);
  const filtration = useSelector<AppRootStateType, FiltrationType>(
    state => state.table.filtration,
  );

  const [showModalForAddItem, setShowModalForAddItem] = useState(false);
  const [showModalForFiltration, setShowModalForFiltration] = useState(false);
  const sortedItems = useSort(sort, items);
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } =
    usePagination({
      contentPerPage: 3,
      count: items.length,
    });
  const table = useFiltration(filtration, sortedItems);
  const emptyFilter: FiltrationType = { field: '', term: '', filter: '' };

  const onClearFilter = (emptyFilter: FiltrationType): void => {
    dispatch(setFiltration(emptyFilter));
  };

  useEffect(() => {
    dispatch(fetchItems() as any);
  }, [items, sort, filtration, table]);

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <TableHeader />
        </thead>
        {!filtration.filter ? (
          <tbody>
            {sortedItems
              ? sortedItems
                  .slice(firstContentIndex, lastContentIndex)
                  .map(item => (
                    <TableRow
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      number={item.number}
                      date={item.date}
                      distance={item.distance}
                    />
                  ))
              : ''}
          </tbody>
        ) : (
          <tbody>
            {table
              ? table
                  .slice(firstContentIndex, lastContentIndex)
                  .map(item => (
                    <TableRow
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      number={item.number}
                      date={item.date}
                      distance={item.distance}
                    />
                  ))
              : ''}
          </tbody>
        )}
      </table>
      <div>
        <button onClick={() => setShowModalForAddItem(true)} type="button">
          Добавить запись
        </button>
        <button
          onClick={() => {
            setShowModalForFiltration(true);
          }}
          type="button"
        >
          Фильтровать
        </button>
        <button onClick={() => onClearFilter(emptyFilter)} type="button">
          Убрать фильтрацию
        </button>
      </div>

      <Modal editShowModal={setShowModalForAddItem} showModal={showModalForAddItem}>
        <AddItem editShowModal={setShowModalForAddItem} />
      </Modal>
      <Modal editShowModal={setShowModalForFiltration} showModal={showModalForFiltration}>
        <Filtration editShowModal={setShowModalForFiltration} />
      </Modal>
      <Paginator page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
});
