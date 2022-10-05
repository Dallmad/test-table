import React from 'react';

import { ReturnComponentType } from 'common';
import { TableCell } from 'features/table/tableRow';
import { TableRowType } from 'state/reducers/table/table-reducer';

export const TableRow = ({
  name,
  date,
  number,
  distance,
}: TableRowType): ReturnComponentType => {
  return (
    <tr>
      <TableCell item={date} />
      <TableCell item={name} />
      <TableCell item={number} />
      <TableCell item={distance} />
    </tr>
  );
};
