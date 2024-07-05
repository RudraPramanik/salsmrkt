import React from 'react';
import clsx from 'clsx';

interface ColoredButtonProps {
  onClick: () => void;
  color?: string;
  children: React.ReactNode;
}

const ColoredButton: React.FC<ColoredButtonProps> = ({ onClick, color="#3A4980", children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-12 py-2 text-white rounded-3xl flex justify-center items-center space-x-4 ",
        `bg-${color}`
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default ColoredButton;
