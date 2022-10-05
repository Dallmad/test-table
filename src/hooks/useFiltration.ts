import { useMemo } from 'react';

import { FiltrationType, TableType } from 'state/reducers/table/table-reducer';

export const useFiltration = (
  filtration: FiltrationType,
  table: TableType,
): TableType => {
  return useMemo(() => {
    const filteredTable: TableType = [...table];

    console.log(`filtration:${filtration.filter}`);

    // filtered by name
    if (filtration.term === '=' && filtration.field === 'Название') {
      filteredTable.filter(item => item.name.toLowerCase() === filtration.filter);
    } else if (filtration.term === '>' && filtration.field === 'Название') {
      filteredTable.filter(item => item.name.toLowerCase() > filtration.filter);
    } else if (filtration.term === '<' && filtration.field === 'Название') {
      console.log('not condition');
      filteredTable.filter(item => item.name.toLowerCase() < filtration.filter);
    } else if (filtration.term === 'содержит' && filtration.field === 'Название') {
      console.log('in condition');
      filteredTable.filter(item =>
        item.name.toLowerCase().includes(filtration.filter.toLowerCase()),
      );
      console.log(`filterTableLength:${filteredTable.length}`);
    }
    // filtered by date
    else if (filtration.term === '=' && filtration.field === 'Дата') {
      filteredTable.filter(item => item.date.toLowerCase() === filtration.filter);
    } else if (filtration.term === '>' && filtration.field === 'Дата') {
      filteredTable.filter(item => item.date.toLowerCase() > filtration.filter);
    } else if (filtration.term === '<' && filtration.field === 'Дата') {
      filteredTable.filter(item => item.date.toLowerCase() < filtration.filter);
    } else if (filtration.term === 'содержит' && filtration.field === 'Дата') {
      filteredTable.filter(item =>
        item.date.toLowerCase().includes(filtration.filter.toLowerCase()),
      );
    }
    // filtered by number
    else if (filtration.term === '=' && filtration.field === 'Количество') {
      filteredTable.map(item => item.number === +filtration.filter);
    } else if (filtration.term === '>' && filtration.field === 'Количество') {
      filteredTable.filter(item => item.number > +filtration.filter);
      console.log(`filterTableLength:${filteredTable.length}`);
    } else if (filtration.term === '<' && filtration.field === 'Количество') {
      filteredTable.map(item => item.number < +filtration.filter);
    } else if (filtration.term === 'содержит' && filtration.field === 'Количество') {
      filteredTable.map(item => item.number.toString().includes(filtration.filter));
    }
    // filtered by distance
    else if (filtration.term === '=' && filtration.field === 'Расстояние') {
      filteredTable.filter(item => item.distance === +filtration.filter);
    } else if (filtration.term === '>' && filtration.field === 'Расстояние') {
      filteredTable.filter(item => item.distance > +filtration.filter);
    } else if (filtration.term === '<' && filtration.field === 'Расстояние') {
      filteredTable.filter(item => item.distance < +filtration.filter);
    } else if (filtration.term === 'содержит' && filtration.field === 'Расстояние') {
      filteredTable.filter(item => item.distance.toString().includes(filtration.filter));
    }

    return filteredTable;
  }, [table, filtration]);
};
