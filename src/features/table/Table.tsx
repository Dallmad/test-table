import React, { memo, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import style from './Table.module.scss';

import { FiltrationType, ReturnComponentType, TableType } from 'common';
import { Modal, Paginator } from 'components';
import { AddItem, TableHeader, TableRow, Filtration } from 'features';
import { useFiltration, usePagination, useSort } from 'hooks';
import { AppRootStateType, fetchItems, setFiltration, useTypedDispatch } from 'state';

const CONTENT_PER_PAGE = 6;

export const Table = memo((): ReturnComponentType => {
  const dispatch = useTypedDispatch();

  const items = useSelector<AppRootStateType, TableType>(state => state.table.table);
  const sort = useSelector<AppRootStateType, string>(state => state.table.sort);
  const filtration = useSelector<AppRootStateType, FiltrationType>(
    state => state.table.filtration,
  );

  const [showModalForAddItem, setShowModalForAddItem] = useState(false);
  const [showModalForFiltration, setShowModalForFiltration] = useState(false);
  const sortedItems = useSort(sort, items);
  const table = useFiltration(filtration, sortedItems);
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } =
    usePagination({
      contentPerPage: CONTENT_PER_PAGE,
      count: table.length,
    });
  const emptyFilter: FiltrationType = { field: '', term: '', filter: '' };

  const onClearFilter = (emptyFilter: FiltrationType): void => {
    dispatch(setFiltration(emptyFilter));
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

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
      <div className={style.button}>
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
