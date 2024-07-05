import React from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { clearCart } from '../../redux/slices/CartSlice';
import CartItem from '../ui/CartItemCard';
import ColoredButton from '../ui/SharedComponent/CButton';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const totalPrice = useAppSelector(state => state.cart.totalPrice);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <CartItem key={`${item.id}-${item.color}-${item.size}`} item={item} />
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
            <ColoredButton onClick={handleClearCart} >
            Checkout Cart

            </ColoredButton>
            {/* <button onClick={handleClearCart} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Checkout Cart
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

// import React from 'react';
// import { useAppDispatch, useAppSelector } from '../../utils/hooks';
// import { removeItem, updateItemCount, clearCart } from '../../redux/slices/CartSlice';
// import ColorSelectButton from '../ui/SharedComponent/ColorSelectButton';
// import { CartIcon } from '../icons';

// const Cart: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const cartItems = useAppSelector(state => state.cart.items);
//   const totalPrice = useAppSelector(state => state.cart.totalPrice);

//   const handleRemoveItem = (id: number, color: string, size: string) => {
//     dispatch(removeItem({ id, color, size }));
//   };

//   const handleUpdateItemCount = (id: number, color: string, size: string, count: number) => {
//     dispatch(updateItemCount({ id, color, size, count }));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   console.log(cartItems)
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           <ul className="space-y-4">
//             {cartItems.map(item => (
//               <li key={`${item.id}-${item.color}-${item.size}`} className="flex items-center bg-white p-4 rounded-lg shadow-md">
//                 <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
//                 <div className="ml-4 flex-grow">
//                   <h3 className="text-lg font-bold">{item.name}</h3>
//                   <p className="text-gray-600">Color: {item.color}</p>
//                   <p className="text-gray-600">Size: {item.size}</p>
//                   <div className="flex items-center mt-2">
//                     <ColorSelectButton
//                      borderColor={item.color.toLowerCase()}
//                       color={item.color.toLowerCase()}
//                       checked={true}
//                       onClick={() => {}}
//                     />
//                     <input
//                       type="number"
//                       value={item.count}
//                       min="1"
//                       className="ml-2 w-16 text-center border rounded"
//                       onChange={(e) => handleUpdateItemCount(item.id, item.color, item.size, Number(e.target.value))}
//                     />
//                   </div>
//                   <p className="mt-2">Price: ${item.unitPrice.toFixed(2)}</p>
//                   <p className="mt-2">Total: ${item.totalPrice.toFixed(2)}</p>
//                 </div>
//                 <button onClick={() => handleRemoveItem(item.id, item.color, item.size)} className="ml-4 text-gray-600 hover:text-red-600">
//                   <CartIcon stroke='#BB0043' className="w-6 h-6" />
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6">
//             <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
//             <button onClick={handleClearCart} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//               Checkout Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

