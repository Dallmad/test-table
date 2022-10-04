import React from 'react';

import { ReturnComponentType } from 'common';
import { TableCell } from 'features/table/tableRow/tableCell/TableCell';

const text = 'table cell';

export const TableRow = ({ cardPacks }: any): ReturnComponentType => {
  return (
    <tr>
      <TableCell packValue={text} />
      <TableCell packValue={text} />
      <TableCell packValue={text} />
      <TableCell packValue={text} />
    </tr>
  );
};
