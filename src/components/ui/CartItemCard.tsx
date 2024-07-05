import React from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { removeItem, updateItemCount } from '../../redux/slices/CartSlice';
import { CrossWhiteIcon } from '../icons/CrossIcon';
import ColorSelectButton from '../ui/SharedComponent/ColorSelectButton';
import Text from './SharedComponent/Text';
import QuantitySelector from '../ui/QuantitySelect';
import { RectDown, RectUp } from '../icons/Rect';

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
    <li className="relative flex items-center bg-white p-4 rounded-lg border ">
      <div className='border rounded-md'>
        <img src={item.image} alt={item.name} className="w-24 2xl:w-44 4xl:w-48 h-20 2xl:h-32 4xl:h-36 object-cover rounded-lg" />
      </div>
      <div className="ml-4 flex-grow">
        <Text variant='bodySm' fontWeight='semibold' color='blue' >{item.name}</Text>
        <div className='flex items-center space-x-2'>
          <Text variant='bodySm' color='gray'>{item.size}</Text>
          <div className=''>
            <ColorSelectButton
            cart={true}
              color={item.color.toLowerCase()}
              checked={true}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
        <Text variant='bodySm' color='chocolate' className="">${item.totalPrice.toFixed(2)}</Text>
        <div className='flex items-center space-x-4 ' >
            <Text variant='bodyXs' color='black' >{item.count}</Text>
            <div className=' space-y-4 ' >
                <span className='w-4 h-4' onClick={handleIncreaseQuantity} >
                    <RectDown className='w-4 h-4 mb-2 ' />
                </span>
                <div></div>
                <span className='w-4 h-4 ' onClick={handleDecreaseQuantity} >
                    <RectUp className='w-4 h-4 mt-2 ' />
                </span>
            </div>

        </div>
        </div>
      </div>
      <button
        onClick={handleRemoveItem}
        className="absolute -top-3 -right-3 p-2 bg-secondary-red rounded-full"
      >
        <CrossWhiteIcon stroke='#FFFFFF' className="w-6 h-6" />
      </button>
    </li>
  );
};

export default CartItem;
