import React from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { clearCart } from "../../redux/slices/CartSlice";
import CartItem from "../ui/CartItemCard";
import ColoredButton from "../ui/SharedComponent/CButton";
import Text from "../ui/SharedComponent/Text";
import { CartIcon } from "../icons";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);

  return (
    <div className="p-6">
      <Text variant="headingLg" fontWeight="semibold" className="text-center mb-8 " color="blue" >My Cart</Text>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={`${item.id}-${item.color}-${item.size}`}
                item={item}
              />
            ))}
          </ul>
          <div className="mt-6 border-t  ">
            <div className="flex justify-between py-4">
              <Text variant="bodySm" color="black">
                Total
              </Text>
              <Text variant="bodySm" color="chocolate">
                ${totalPrice.toFixed(2)}
              </Text>
            </div>
            <div className="flex justify-center " >
            <ColoredButton onClick={handleClearCart}>
              <CartIcon stroke="white" />
              <Text variant="bodySm" color="white">
                {" "}
                Checkout
              </Text>
            </ColoredButton>
            </div>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
