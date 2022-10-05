import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { ReturnComponentType } from 'common';
import { Select } from 'components/Select/Select';
import { FiltrationProps } from 'features/filtration/types';
import style from 'features/table/Table.module.scss';
import { headerTitles } from 'features/table/tableHeader/TableHeader';
import { FiltrationType, setFiltration } from 'state/reducers/table/table-reducer';

export const TERMS_FOR_SELECT = ['=', '<', '>', 'содержит'];

export const Filtration = ({ editShowModal }: FiltrationProps): ReturnComponentType => {
  const dispatch = useDispatch();

  const [field, setField] = useState(headerTitles[0].titleRu);
  const [term, setTerm] = useState(TERMS_FOR_SELECT[0]);
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
      <div className={style.titleModal}>Add</div>
      Фильтр по:
      <Select
        className={style.select}
        value={field}
        onChangeOption={setField}
        options={headerTitles.map(({ titleRu }) => titleRu)}
      />
      Условие:
      <Select
        className={style.select}
        value={term}
        onChangeOption={setTerm}
        options={TERMS_FOR_SELECT}
      />
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
