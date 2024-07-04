import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { setColor, setSize } from '../redux/slices/ProductSlice';
import { addItem } from '../redux/slices/CartSlice';
import productData from '../utils/constant';
import Gallery from '../components/ProductGallary';
import CustomRadioButton from '../components/ui/SharedComponent/RadioButton';
import SelectButton from '../components/ui/SharedComponent/SelectButton';
import ColorSelectButton from '../components/ui/SharedComponent/Button';
// import { setColor, setSize } from '../redux/slice/productSlice';
// import { addItem } from '../redux/slice/cartSlice';
// import productData from '../ProductData';

const Product: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedColor = useAppSelector(state => state.product.selectedColor);
  const selectedSize = useAppSelector(state => state.product.selectedSize);
  const mainImage = useAppSelector(state => state.product.mainImage);
  const product = productData;

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const defaultSize = product.colors.find(color => color.name === selectedColor)?.sizes[0].size || '';
    dispatch(setSize(defaultSize));
  }, [selectedColor, dispatch]);

  const handleColorChange = (color: string, mainImage: string) => {
    dispatch(setColor({ color, mainImage }));
  };

  const handleSizeChange = (size: string) => {
    dispatch(setSize(size));
  };

  const handleThumbnailClick = (color: string, image: string) => {
    dispatch(setColor({ color, mainImage: image }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    const selectedColorObject = product.colors.find(color => color.name === selectedColor);
    const selectedSizeObject = selectedColorObject?.sizes.find(size => size.size === selectedSize);

    if (selectedColorObject && selectedSizeObject) {
      dispatch(addItem({
        id: product.id,
        name: product.name,
        color: selectedColor,
        size: selectedSize,
        count: quantity,
        unitPrice: selectedSizeObject.price
      }));
      setQuantity(1); // Reset quantity to 1 after adding to cart
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      
      {/* Color Buttons */}
      <div>
        {product.colors.map(color => (
          <ColorSelectButton
            key={color.name}
            color={color.name}
            checked={selectedColor === color.name}
            onClick={() => handleColorChange(color.name, color.image)}
          />
        ))}
      </div>
      {/* <div>
        {product.colors.map(color => (
          <SelectButton
            key={color.name}
            color={color.name}
            checked={selectedColor === color.name}
            onChange={() => handleColorChange(color.name, color.image)}
          />
        ))}
      </div> */}
   
 
         <div>
        {product.colors.find(color => color.name === selectedColor)?.sizes.map(size => (
          <CustomRadioButton
            key={size.size}
            checked={selectedSize === size.size}
            onChange={() => handleSizeChange(size.size)}
            label={size.size}
          />
        ))}
      </div>

      {/* Main Image */}
      <div>
        <img src={mainImage} alt={`${selectedColor} ${product.name}`} style={{ width: '300px', height: '300px' }} />
      </div>

      {/* Thumbnails */}
          <Gallery
        mainImage={mainImage}
        colors={product.colors}
        selectedColor={selectedColor}
        onThumbnailClick={handleThumbnailClick}
      />

      {/* Quantity Selector */}
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <select id="quantity" value={quantity} onChange={handleQuantityChange}>
          {Array.from({ length: 15 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      {/* Display selected size and price */}
      <div>
        <p>Selected Size: {selectedSize}</p>
        <p>
          Price: $
          {product.colors.find(color => color.name === selectedColor)?.sizes.find(size => size.size === selectedSize)?.price.toFixed(2)}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;

