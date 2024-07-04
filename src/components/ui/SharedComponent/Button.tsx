import React from 'react';
import clsx from 'clsx';

interface ColorSelectButtonProps {
  color: string;
  checked: boolean;
  onClick: () => void;
}

const ColorSelectButton: React.FC<ColorSelectButtonProps> = ({ color, checked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-8 h-8 sm:w-[48px] sm:h-[48px] xl:w-[60px] xl:h-[60px] 3xl:w-[70px] 3xl:h-[70px] rounded-full mt-1 border-2",
        checked ? `bg-${color} border-black` : `bg-${color} border-transparent`,
        "focus:outline-none"
      )}
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorSelectButton;
