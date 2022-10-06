import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { EditShowModalType, FiltrationType, ReturnComponentType } from 'common';
import { Select } from 'components';
import { ARRAY_FOR_SELECT, headerTitles } from 'enums';
import style from 'features/table/Table.module.scss';
import { setFiltration } from 'state/reducers/table/table-reducer';

export const Filtration = ({ editShowModal }: EditShowModalType): ReturnComponentType => {
  const dispatch = useDispatch();

  const [field, setField] = useState(headerTitles[0].titleRu);
  const [term, setTerm] = useState(ARRAY_FOR_SELECT[0]);
  const [filter, setFilter] = useState('');

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.currentTarget.value);
  };
  const filtration = { field, term, filter };
  const onApplyFilter = (filtration: FiltrationType): void => {
    dispatch(setFiltration(filtration));
    editShowModal(false);
  };

  return (
    <div className={style.bigModal}>
      <div className={style.titleModal}>Настройка фильтра</div>
      <div>Фильтр по:</div>
      <Select
        className={style.select}
        value={field}
        onChangeOption={setField}
        options={headerTitles.map(({ titleRu }) => titleRu)}
      />
      <div>Условие:</div>
      <Select
        className={style.select}
        value={term}
        onChangeOption={setTerm}
        options={ARRAY_FOR_SELECT}
      />
      <div>Данные:</div>
      <input type="text" value={filter} onChange={onChangeFilter} />
      <div className={style.containerBtn}>
        <button
          onClick={() => {
            editShowModal(false);
          }}
          type="button"
        >
          Закрыть
        </button>
        <button onClick={() => onApplyFilter(filtration)} type="button">
          Применить фильтр
        </button>
      </div>
    </div>
  );
};
