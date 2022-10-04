import React from 'react';

import style from './Header.module.scss';

import { ReturnComponentType } from 'common';

export const Header = (): ReturnComponentType => {
  return <div className={style.container}>Test table</div>;
};
