import { ReturnComponentType } from 'common';

export const TableCell = ({ item }: ItemValueType): ReturnComponentType => {
  return <td>{item}</td>;
};

// types
export type ItemValueType = {
  item: string | number;
};
