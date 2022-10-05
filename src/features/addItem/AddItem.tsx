import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import { ReturnComponentType } from 'common';
import { AddItemProps } from 'features/addItem/types';
import style from 'features/table/Table.module.scss';
import { createRow, TableRowType } from 'state/reducers/table/table-reducer';

export const AddItem = ({ editShowModal }: AddItemProps): ReturnComponentType => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [number, setNumber] = useState(0);
  const [distance, setDistance] = useState(0);

  const addItem = (newRow: TableRowType): void => {
    dispatch(createRow(newRow));
    setNewTitle('');
    setDistance(0);
    setNumber(0);
    editShowModal(false);
  };
  const newRow: TableRowType = {
    id: v4(),
    date: Date(),
    name: newTitle,
    number,
    distance,
  };

  return (
    <div className={style.bigModal}>
      <div className={style.titleModal}>Add</div>
      Название
      <input value={newTitle} onChange={e => setNewTitle(e.currentTarget.value)} />
      Количество
      <input value={number} onChange={e => setNumber(+e.currentTarget.value)} />
      Расстояние
      <input value={distance} onChange={e => setDistance(+e.currentTarget.value)} />
      <div className={style.containerBtn}>
        <button
          onClick={() => {
            editShowModal(false);
          }}
          type="button"
        >
          cancel
        </button>
        <button onClick={() => addItem(newRow)} type="button">
          save
        </button>
      </div>
    </div>
  );
};
