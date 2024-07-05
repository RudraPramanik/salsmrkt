import React from 'react';
import clsx from 'clsx';
import TickIcon from '../../icons/TickIcon';

interface ColorSelectButtonProps {
  color: string;
  checked: boolean;
  onClick: () => void;
  cart?: boolean; // Add cart prop
}

const ColorSelectButton: React.FC<ColorSelectButtonProps> = ({ color, checked, onClick, cart = false }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative flex items-center justify-center rounded-full mt-1 border-2",
        "focus:outline-none",
        cart ? "w-4 h-4" : "w-10 h-10 sm:w-[48px] sm:h-[48px] xl:w-[60px] xl:h-[60px] 3xl:w-[70px] 3xl:h-[70px]",
        `bg-${color}`
      )}
      style={{
        backgroundColor: color,
        borderColor: checked ? color : 'transparent',
      }}
    >
         {checked && !cart && (
        <>
          <span
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: 'white' }}
          ></span>
          <TickIcon className=" w-2 h-2 sm:w-4 sm:h-4 z-10" />
        </>
      )}
    </button>
  );
};

export default ColorSelectButton;
