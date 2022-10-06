import { useMemo } from 'react';

import { FiltrationType, TableType } from 'state/reducers/table/table-reducer';

export const useFiltration = (
  filtration: FiltrationType,
  table: TableType,
): TableType => {
  return useMemo(() => {
    // filtered by name
    if (filtration.term === '=' && filtration.field === 'Название') {
      return table.filter(item => item.name.toLowerCase() === filtration.filter);
    }
    if (filtration.term === '>' && filtration.field === 'Название') {
      return table.filter(item => item.name.toLowerCase() > filtration.filter);
    }
    if (filtration.term === '<' && filtration.field === 'Название') {
      return table.filter(item => item.name.toLowerCase() < filtration.filter);
    }
    if (filtration.term === 'содержит' && filtration.field === 'Название') {
      return table.filter(item =>
        item.name.toLowerCase().includes(filtration.filter.toLowerCase()),
      );
    }
    // filtered by date
    if (filtration.term === '=' && filtration.field === 'Дата') {
      return table.filter(
        item => item.date.toString().toLowerCase() === filtration.filter,
      );
    }
    if (filtration.term === '>' && filtration.field === 'Дата') {
      return table.filter(item => item.date.toString().toLowerCase() > filtration.filter);
    }
    if (filtration.term === '<' && filtration.field === 'Дата') {
      return table.filter(item => item.date.toString().toLowerCase() < filtration.filter);
    }
    if (filtration.term === 'содержит' && filtration.field === 'Дата') {
      return table.filter(item =>
        item.date.toString().includes(filtration.filter.toLowerCase()),
      );
    }
    // filtered by number
    if (filtration.term === '=' && filtration.field === 'Количество') {
      return table.filter(item => item.number === +filtration.filter);
    }
    if (filtration.term === '>' && filtration.field === 'Количество') {
      return table.filter(item => item.number > +filtration.filter);
    }
    if (filtration.term === '<' && filtration.field === 'Количество') {
      return table.filter(item => item.number < +filtration.filter);
    }
    if (filtration.term === 'содержит' && filtration.field === 'Количество') {
      return table.filter(item => item.number.toString().includes(filtration.filter));
    }
    // filtered by distance
    if (filtration.term === '=' && filtration.field === 'Расстояние') {
      return table.filter(item => item.distance === +filtration.filter);
    }
    if (filtration.term === '>' && filtration.field === 'Расстояние') {
      return table.filter(item => item.distance > +filtration.filter);
    }
    if (filtration.term === '<' && filtration.field === 'Расстояние') {
      return table.filter(item => item.distance < +filtration.filter);
    }
    if (filtration.term === 'содержит' && filtration.field === 'Расстояние') {
      return table.filter(item => item.distance.toString().includes(filtration.filter));
    }

    return table;
  }, [filtration, table]);
};
