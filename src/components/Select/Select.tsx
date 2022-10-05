import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: string[] | number[];
  onChangeOption?: (option: string) => void;
};

export const Select: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions = options
    ? options.map((o, i) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))
    : [];
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChange) {
      onChange(e);
    }
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value);
    }
  };

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};
