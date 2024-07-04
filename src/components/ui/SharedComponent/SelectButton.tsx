import React from 'react';
import clsx from 'clsx';
import { OneIcon } from '../../icons';

interface SelectButtonProps {
  color: string;
  checked: boolean;
  onChange: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ color, checked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={clsx(
          "peer relative appearance-none shrink-0 w-8 h-8 sm:w-[48px] sm:h-[48px] xl:w-[60px] xl:h-[60px] 3xl:w-[70px] 3xl:h-[70px] border-none rounded-full mt-1",
          checked ? `bg-[${color}]` : "bg-gray-400",
          "checked:outline-none checked:ring-offset-1 checked:ring-[2px] checked:ring-black"
        )}
      />
      {checked && <OneIcon customStroke="white" />}
    </label>
  );
};

export default SelectButton;

