import React from 'react';
import clsx from 'clsx';
import Text from './Text';

interface DeliveryQuotoProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
  iconColor?: string;
}

const DeliveryQuote: React.FC<DeliveryQuotoProps> = ({ icon, heading, description}) => {
  return (
    <div className="flex items-center space-x-4  p-2">
      <div className={clsx('flex-shrink-0')}>
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-custom-black">{heading}</h2>
        <Text variant='bodySm' className='underline' color='chocolate' >{description}</Text>
      </div>
    </div>
  );
};

export default DeliveryQuote;
