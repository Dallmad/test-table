import { ReturnComponentType } from 'common';

export const TableHeader = ({ sortPacks }: any): ReturnComponentType => {
  // const dispatch = useDispatch();

  /*  const onSortPacks = (value: string) => {
    const sort = +!+sortPacks.slice(0, 1) + value;

    dispatch(setSortPacksAC(sort));
  }; */

  return (
    <tr>
      <th>Дата</th>
      <th onClick={() => {}}>Название</th>
      <th onClick={() => {}}>Количество</th>
      <th onClick={() => {}}>Расстояние</th>
    </tr>
  );
};
