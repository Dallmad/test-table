import { useMemo } from 'react';

import { FiltrationType, TableType } from 'common';
import { ARRAY_FOR_SELECT, headerTitles } from 'enums';

export const useFiltration = (
  filtration: FiltrationType,
  table: TableType,
): TableType => {
  return useMemo(() => {
    // filtered by name
    if (
      filtration.term === ARRAY_FOR_SELECT[0] &&
      filtration.field === headerTitles[1].titleRu
    ) {
      return table.filter(item => item.name.toLowerCase() === filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[1] &&
      filtration.field === headerTitles[1].titleRu
    ) {
      return table.filter(item => item.name.toLowerCase() > filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[2] &&
      filtration.field === headerTitles[1].titleRu
    ) {
      return table.filter(item => item.name.toLowerCase() < filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[3] &&
      filtration.field === headerTitles[1].titleRu
    ) {
      return table.filter(item =>
        item.name.toLowerCase().includes(filtration.filter.toLowerCase()),
      );
    }
    // filtered by date
    if (
      filtration.term === ARRAY_FOR_SELECT[0] &&
      filtration.field === headerTitles[0].titleRu
    ) {
      return table.filter(
        item => item.date.toString().toLowerCase() === filtration.filter,
      );
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[1] &&
      filtration.field === headerTitles[0].titleRu
    ) {
      return table.filter(item => item.date.toString().toLowerCase() > filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[2] &&
      filtration.field === headerTitles[0].titleRu
    ) {
      return table.filter(item => item.date.toString().toLowerCase() < filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[3] &&
      filtration.field === headerTitles[0].titleRu
    ) {
      return table.filter(item =>
        item.date.toString().includes(filtration.filter.toLowerCase()),
      );
    }
    // filtered by number
    if (
      filtration.term === ARRAY_FOR_SELECT[0] &&
      filtration.field === headerTitles[2].titleRu
    ) {
      return table.filter(item => item.number === +filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[1] &&
      filtration.field === headerTitles[2].titleRu
    ) {
      return table.filter(item => item.number > +filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[2] &&
      filtration.field === headerTitles[2].titleRu
    ) {
      return table.filter(item => item.number < +filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[3] &&
      filtration.field === headerTitles[2].titleRu
    ) {
      return table.filter(item => item.number.toString().includes(filtration.filter));
    }
    // filtered by distance
    if (
      filtration.term === ARRAY_FOR_SELECT[0] &&
      filtration.field === headerTitles[3].titleRu
    ) {
      return table.filter(item => item.distance === +filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[1] &&
      filtration.field === headerTitles[3].titleRu
    ) {
      return table.filter(item => item.distance > +filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[2] &&
      filtration.field === headerTitles[3].titleRu
    ) {
      return table.filter(item => item.distance < +filtration.filter);
    }
    if (
      filtration.term === ARRAY_FOR_SELECT[3] &&
      filtration.field === headerTitles[3].titleRu
    ) {
      return table.filter(item => item.distance.toString().includes(filtration.filter));
    }

    return table;
  }, [filtration, table]);
};
