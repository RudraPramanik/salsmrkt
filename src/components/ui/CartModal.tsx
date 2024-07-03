import React from 'react';

interface CartModalProps {
  onClose: () => void;
  isVisible: boolean;
  children: React.ReactNode;
}

const CartModal: React.FC<CartModalProps> = ({ onClose, isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed mt-20 inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white absolute top-28 right-10 p-6 rounded-lg shadow-lg z-10">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CartModal;
