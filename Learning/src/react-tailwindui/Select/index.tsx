import {ChangeEvent } from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps {
  options: Option[];
  onChange: (selectedOption: Option) => void;
  value: Option | undefined;
}

function SelectBox({ options, onChange, value }: SelectBoxProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find((option) => option.value === selectedValue);

    if (selectedOption) {
      onChange(selectedOption);
    }
  };

  return (
    <select value={value ? value.value : ''} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;

