import React from 'react';
import clsx from 'clsx';
import Text from './Text';

interface TooltipProps {
  icon?: React.ReactNode;
  text?: string;
  bgColor: string;
  textColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ icon, text, bgColor, textColor }) => {
  return (
    <div className={clsx("flex p-2 justify-center rounded-xl items-center space-x-2", `bg-${bgColor}`, `text-${textColor}` )}>
      {icon && <span className="m-1">{icon}</span>}
      {text && <Text variant='bodyXs' className={clsx(`text-${textColor}`)}>{text}</Text>}
    </div>
  );
};

export default Tooltip;
