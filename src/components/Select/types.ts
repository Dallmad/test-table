import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export type SelectPropsType = DefaultSelectPropsType & {
  options?: string[] | number[];
  onChangeOption?: (option: string) => void;
};
