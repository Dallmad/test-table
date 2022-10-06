import React from 'react';

import style from './Header.module.scss';

import { ReturnComponentType } from 'common';

export const Header = (): ReturnComponentType => {
  return <h2 className={style.container}>Тестовая таблица</h2>;
};
