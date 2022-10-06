import React from 'react';

import { ReturnComponentType, TableRowType } from 'common';
import { TableCell } from 'features';

const MAX_DATE_LENGTH = 24;

export const TableRow = ({
  name,
  date,
  number,
  distance,
}: TableRowType): ReturnComponentType => {
  return (
    <tr>
      <TableCell item={date.toString().slice(0, MAX_DATE_LENGTH)} />
      <TableCell item={name} />
      <TableCell item={number} />
      <TableCell item={distance} />
    </tr>
  );
};
