import React from 'react';
import clsx from 'clsx';

interface ColoredButtonProps {
  onClick: () => void;
  color: string;
  children: React.ReactNode;
}

const ColoredButton: React.FC<ColoredButtonProps> = ({ onClick, color, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 text-white rounded",
        `bg-${color}`
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default ColoredButton;
