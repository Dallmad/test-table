import React from 'react';

import { ReturnComponentType } from 'common';
import { TableCell } from 'features/table/tableRow';
import { TableRowType } from 'state/reducers/recipes/table-reducer';

const DATE_LENGTH = 24;

export const TableRow = ({
  name,
  date,
  number,
  distance,
  id,
}: TableRowType): ReturnComponentType => {
  return (
    <tr>
      {/* eslint-disable-next-line no-magic-numbers */}
      <TableCell item={date.slice(0, DATE_LENGTH)} />
      <TableCell item={name} />
      <TableCell item={number} />
      <TableCell item={distance} />
    </tr>
  );
};
