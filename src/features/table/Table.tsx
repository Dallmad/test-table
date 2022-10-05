import React, { memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import style from './Table.module.scss';

import { ReturnComponentType } from 'common';
import { Modal } from 'components';
import { TableHeader, TableRow } from 'features';
import { useSort } from 'hooks/useSort';
import { AppRootStateType } from 'state';
import { createRow, TableRowType, TableType } from 'state/reducers/table/table-reducer';

export const Table = memo((): ReturnComponentType => {
  const dispatch = useDispatch();

  const items = useSelector<AppRootStateType, TableType>(state => state.table.table);
  const sort = useSelector<AppRootStateType, string>(state => state.table.sort);

  const [newTitle, setNewTitle] = useState('');
  const [number, setNumber] = useState(0);
  const [distance, setDistance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const sortedItems = useSort(sort, items);

  const editShowModal = (value: boolean): void => {
    setShowModal(value);
  };

  const newRow: TableRowType = {
    id: v4(),
    date: Date(),
    name: newTitle,
    number,
    distance,
  };

  const addItem = (newRow: TableRowType): void => {
    dispatch(createRow(newRow));
    setNewTitle('');
    setDistance(0);
    setNumber(0);
    setShowModal(false);
  };

  useEffect(() => {}, [newRow, items, sort]);

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {sortedItems
            ? sortedItems.map(item => (
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
      </table>
      <button onClick={() => editShowModal(true)} type="button">
        Add
      </button>
      <Modal editShowModal={editShowModal} showModal={showModal}>
        <div className={style.bigModal}>
          <div className={style.titleModal}>Add</div>
          Название
          <input value={newTitle} onChange={e => setNewTitle(e.currentTarget.value)} />
          Количество
          <input value={number} onChange={e => setNumber(+e.currentTarget.value)} />
          Расстояние
          <input value={distance} onChange={e => setDistance(+e.currentTarget.value)} />
          <div className={style.containerBtn}>
            <button onClick={() => editShowModal(false)} type="button">
              cancel
            </button>
            <button onClick={() => addItem(newRow)} type="button">
              save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
});
