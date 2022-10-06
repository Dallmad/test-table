import { ItemValueType } from './types';

import { ReturnComponentType } from 'common';

export const TableCell = ({ item }: ItemValueType): ReturnComponentType => {
  return <td>{item}</td>;
};
