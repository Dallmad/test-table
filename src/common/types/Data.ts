export type FiltrationType = {
  field: string;
  term: string;
  filter: string;
};

export type TableType = TableRowType[];

export type TableRowType = {
  id: string;
  date: Date;
  name: string;
  number: number;
  distance: number;
};
