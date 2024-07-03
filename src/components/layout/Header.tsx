import React, { useState } from "react";
import { CartIcon } from "../icons";
import Text from "../ui/SharedComponent/Text";
import CartModal from "../ui/CartModal";

interface HeaderProps {
  logoSrc: string;
  iconComponent?: React.ReactNode;
}

interface CartButtonProps {
  order: number;
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ order, onClick }) => {
  return (
    <div className="p-4 rounded-full bg-chocolate-light relative cursor-pointer" onClick={onClick}>
      <div className="absolute border border-white text-white flex justify-center rounded-full -top-1 -right-1 w-5 h-5 bg-primary-black text-xs">
        <Text variant="bodyXxs" lineHeight="tight" className="text-white">
          {order}
        </Text>
      </div>
      <CartIcon stroke="#875541" className="h-5 w-5" />
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartVisible(true);
  };

  const handleCloseModal = () => {
    setIsCartVisible(false);
  };

  return (
    <header className="relative pb-1 bg-white">
      <div className="border-b border-gray-300">
        <div className="flex justify-between items-center py-4 px-6">
          <img src={logoSrc} alt="Logo" className="h-10" />
          <CartButton order={3} onClick={handleCartButtonClick} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[.5px] bg-primary-gray shadow-custom-bottom mt-2"></div>
      </div>
      <CartModal isVisible={isCartVisible} onClose={handleCloseModal}>
        <div>
          <h2 className="text-xl font-bold">Your Cart</h2>
          <p>Your cart is currently empty.</p>
        </div>
      </CartModal>
    </header>
  );
};

export default Header;
