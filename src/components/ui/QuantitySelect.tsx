import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center bg-primary-gray border rounded-3xl ">
      <button
        onClick={onDecrease}
        className="px-4 py-2 text-xl font-bold text-custom-gray rounded-l-lg"
        disabled={quantity <= 1}
      >
        -
      </button>
      <div className="w-12 text-center text-xl font-bold">
        {quantity}
      </div>
      <button
        onClick={onIncrease}
        className="px-4 py-2 text-2xl font-bold text-blue-dark rounded-r-lg"
        disabled={quantity >= 15}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
