import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onDecrease}
        className="px-2 py-1 border border-gray-300 rounded-l"
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-12 text-center border-t border-b border-gray-300"
      />
      <button
        onClick={onIncrease}
        className="px-2 py-1 border border-gray-300 rounded-r"
        disabled={quantity >= 15}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
