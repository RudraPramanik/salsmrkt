import React from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { removeItem, updateItemCount } from '../../redux/slices/CartSlice';
import { CrossWhiteIcon } from '../icons/CrossIcon';
import ColorSelectButton from '../ui/SharedComponent/ColorSelectButton';
import Text from './SharedComponent/Text';
import QuantitySelector from '../ui/QuantitySelect';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    color: string;
    size: string;
    count: number;
    unitPrice: number;
    totalPrice: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem({ id: item.id, color: item.color, size: item.size }));
  };

  const handleUpdateItemCount = (count: number) => {
    dispatch(updateItemCount({ id: item.id, color: item.color, size: item.size, count }));
  };

  const handleIncreaseQuantity = () => {
    handleUpdateItemCount(item.count + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.count > 1) {
      handleUpdateItemCount(item.count - 1);
    }
  };

  return (
    <li className="relative flex items-center bg-white p-4 rounded-lg shadow-md">
      <div className='border rounded-md'>
        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <div className='flex items-center space-x-2'>
          <Text variant='bodySm' color='gray'>{item.size}</Text>
          <div className=''>
            {/* <ColorSelectButton
              borderColor={item.color.toLowerCase()}
              color={item.color.toLowerCase()}
              checked={true}
              onClick={() => {}}
            /> */}
          </div>
        </div>
        <div className="flex items-center mt-2">
        <p className="ml-4">Total: ${item.totalPrice.toFixed(2)}</p>

          {/* <QuantitySelector
            quantity={item.count}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          /> */}
        </div>
      </div>
      <button
        onClick={handleRemoveItem}
        className="absolute top-2 right-2 p-2 bg-red-900 rounded-full"
      >
        <CrossWhiteIcon stroke='#FFFFFF' className="w-6 h-6" />
      </button>
    </li>
  );
};

export default CartItem;