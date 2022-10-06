import React, { ChangeEvent } from 'react';

import { SelectPropsType } from 'components';

export const Select: React.FC<SelectPropsType> = ({
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
