import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import style from './Table.module.scss';

import { ReturnComponentType } from 'common';
import { Modal } from 'components/Modal/Modal';
import { TableHeader } from 'features/table/tableHeader/TableHeader';
import { TableRow } from 'features/table/tableRow/TableRow';
import { createRow, TableRowType } from 'state/reducers/recipes/table-reducer';

export const Table = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState('');
  const [number, setNumber] = useState(0);
  const [distance, setDistance] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
      <button onClick={() => editShowModal(true)} type="button">
        Add
      </button>
      <Modal editShowModal={editShowModal} showModal={showModal} classname={style.modal}>
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
};
