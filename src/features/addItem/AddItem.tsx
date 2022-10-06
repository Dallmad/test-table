import React, { useState } from 'react';

import { v4 } from 'uuid';

import { EditShowModalType, ReturnComponentType, TableRowType } from 'common';
import style from 'features/table/Table.module.scss';
import { useTypedDispatch, addItem } from 'state';

export const AddItem = ({ editShowModal }: EditShowModalType): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [number, setNumber] = useState(0);
  const [distance, setDistance] = useState(0);

  const addNewItem = (newRow: TableRowType): void => {
    dispatch(addItem(newRow));
    setNewTitle('');
    setDistance(0);
    setNumber(0);
    editShowModal(false);
  };
  const newRow: TableRowType = {
    id: v4(),
    date: new Date(),
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
          Закрыть
        </button>
        <button onClick={() => addNewItem(newRow)} type="button">
          Добавить
        </button>
      </div>
    </div>
  );
};
