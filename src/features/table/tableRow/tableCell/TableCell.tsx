import { ReturnComponentType } from 'common';

export const TableCell = ({ packValue }: PackValueType): ReturnComponentType => {
  return <td>{packValue}</td>;
};

// types
type PackValueType = {
  packValue: string | number;
};
