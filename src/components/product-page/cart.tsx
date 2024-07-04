import React from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { removeItem, updateItemCount, clearCart } from '../../redux/slices/CartSlice';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const totalPrice = useAppSelector(state => state.cart.totalPrice);

  const handleRemoveItem = (id: number, color: string, size: string) => {
    dispatch(removeItem({ id, color, size }));
  };

  const handleUpdateItemCount = (id: number, color: string, size: string, count: number) => {
    dispatch(updateItemCount({ id, color, size, count }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={`${item.id}-${item.color}-${item.size}`}>
                <div>
                  <p>{item.name} - {item.color} - {item.size}</p>
                  <p>Price: ${item.unitPrice.toFixed(2)}</p>
                  <p>Quantity: 
                    <input
                      type="number"
                      value={item.count}
                      min="1"
                      onChange={(e) => handleUpdateItemCount(item.id, item.color, item.size, Number(e.target.value))}
                    />
                  </p>
                  <p>Total: ${item.totalPrice.toFixed(2)}</p>
                  <button onClick={() => handleRemoveItem(item.id, item.color, item.size)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleClearCart}>chackout cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
