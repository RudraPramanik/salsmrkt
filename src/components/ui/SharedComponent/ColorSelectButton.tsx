
import React from 'react';
import clsx from 'clsx';
import TickIcon from '../../icons/TickIcon';

interface ColorSelectButtonProps {
  color: string;
  checked: boolean;
  onClick: () => void;
  borderColor: string;
}

const ColorSelectButton: React.FC<ColorSelectButtonProps> = ({ color, checked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative flex items-center justify-center w-8 h-8 sm:w-[48px] sm:h-[48px] xl:w-[60px] xl:h-[60px] 3xl:w-[70px] 3xl:h-[70px] rounded-full mt-1 border-2",
        "focus:outline-none ", `bg-${color}`
      )}
      style={{
        backgroundColor: color,
        borderColor: checked ? color : 'transparent',
      }}
    >
      {checked && (
        <>
          <span
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: 'white' }}
          ></span>
          <TickIcon className="w-4 h-4 z-10" />
        </>
      )}
    </button>
  );
};

export default ColorSelectButton;
