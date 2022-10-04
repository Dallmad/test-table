import { useDispatch } from 'react-redux';

import { ReturnComponentType } from 'common';
import { setSort } from 'state/reducers/table/table-reducer';

const headerTitles: HeaderTitlesType = [
  { id: 1, titleRu: 'Дата', titleEng: 'date' },
  { id: 2, titleRu: 'Название', titleEng: 'date' },
  { id: 3, titleRu: 'Количество', titleEng: 'date' },
  { id: 4, titleRu: 'Расстояние', titleEng: 'date' },
];

export type HeaderTitlesType = HeaderTitleType[];
export type HeaderTitleType = {
  id: number;
  titleRu: string;
  titleEng: string;
};

export const TableHeader = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const onSortPacks = (value: string): void => {
    // const sort = +!+sortPacks.slice(0, 1) + value;

    console.log(value);
    // @ts-ignore
    dispatch(setSort(value));
  };

  return (
    <tr>
      {headerTitles.map(({ id, titleRu, titleEng }) => (
        <th
          key={id}
          onClick={() => {
            onSortPacks(titleEng);
          }}
        >
          {titleRu}
        </th>
      ))}
    </tr>
  );
};
