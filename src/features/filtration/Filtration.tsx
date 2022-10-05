import React from 'react';

import { ReturnComponentType } from 'common';
import { FiltrationProps } from 'features/filtration/types';
import style from 'features/table/Table.module.scss';

export const Filtration = ({ editShowModal }: FiltrationProps): ReturnComponentType => {
  return (
    <div className={style.bigModal}>
      <div className={style.titleModal}>Add</div>
      Название Количество
      <div className={style.containerBtn}>
        <button
          onClick={() => {
            editShowModal(false);
          }}
          type="button"
        >
          cancel
        </button>
        <button onClick={() => {}} type="button">
          save
        </button>
      </div>
    </div>
  );
};
