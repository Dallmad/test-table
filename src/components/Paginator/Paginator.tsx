import React, { useState } from 'react';

import s from './Paginator.module.scss';

import { ReturnComponentType } from 'common';
import { PaginatorTypeProps } from 'components';

export const Paginator = ({
  page,
  setPage,
  totalPages,
}: PaginatorTypeProps): ReturnComponentType => {
  const portionSize = 2;
  const pages: number[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(totalPages / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  /* const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize; */

  return (
    <div className={s.container}>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(1);
        }}
        disabled={portionNumber <= 1}
      >
        {'<<'}
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(portionNumber - 1);
        }}
        disabled={portionNumber <= 1}
      >
        {'<'}
      </button>
      {pages
        // .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p, i) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <span
              key={p}
              onClick={() => {
                setPage(p);
              }}
              className={page === p ? s.selectedPage : s.simplePage}
            >
              {p}{' '}
            </span>
          );
        })}
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(portionNumber + 1);
        }}
        disabled={portionCount <= portionNumber}
      >
        {'>'}
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(portionCount);
        }}
        disabled={portionCount <= portionNumber}
      >
        {'>>'}
      </button>
    </div>
  );
};
