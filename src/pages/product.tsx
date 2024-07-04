import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setColor, setSize } from "../redux/slices/ProductSlice";
import { addItem } from "../redux/slices/CartSlice";
import productData from "../utils/constant";
import Gallery from "../components/product-page/ProductGallary";
import CustomRadioButton from "../components/ui/SharedComponent/RadioButton";
import ColorSelectButton from "../components/ui/SharedComponent/ColorSelectButton";
import QuantitySelector from "../components/ui/QuantitySelect";
import ColoredButton from "../components/ui/SharedComponent/CButton";
import ProductDescription from "../components/ui/ProductDescription";
import Text from "../components/ui/SharedComponent/Text";
import ProductOutline from "../components/product-page/ProductOutline";

const Product: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedColor = useAppSelector((state) => state.product.selectedColor);
  const selectedSize = useAppSelector((state) => state.product.selectedSize);
  const mainImage = useAppSelector((state) => state.product.mainImage);
  const product = productData;

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const defaultSize =
      product.colors.find((color) => color.name === selectedColor)?.sizes[0]
        .size || "";
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

  const handleIncreaseQuantity = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const selectedColorObject = product.colors.find(
      (color) => color.name === selectedColor
    );
    const selectedSizeObject = selectedColorObject?.sizes.find(
      (size) => size.size === selectedSize
    );

    if (selectedColorObject && selectedSizeObject) {
      dispatch(
        addItem({
          id: product.id,
          name: product.name,
          color: selectedColor,
          size: selectedSize,
          count: quantity,
          unitPrice: selectedSizeObject.price,
        })
      );
      setQuantity(1);
    }
  };

  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* gallary */}
        <div className=" col-span-1 ">
          <Gallery
            mainImage={mainImage}
            colors={product.colors}
            selectedColor={selectedColor}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
        {/* gallary */}
        {/* product */}
        <div className=" col-span-1 ">
            <div>
                <ProductDescription/>
            </div>
          <div className="flex space-x-4 " >
            {product.colors.map((color) => (
              <ColorSelectButton
              borderColor={color.name}
                key={color.name}
                color={color.name}
                checked={selectedColor === color.name}
                onClick={() => handleColorChange(color.name, color.image)}
              />
            ))}
          </div>



          <div>
          <Text variant='bodyXs' className=" text-chocolate-text " >{selectedSize}</Text>

          <div className="flex space-x-4" >
            {product.colors
              .find((color) => color.name === selectedColor)
              ?.sizes.map((size) => (
                <CustomRadioButton
                  key={size.size}
                  checked={selectedSize === size.size}
                  onChange={() => handleSizeChange(size.size)}
                  label={size.size}
                />
              ))}
          </div>
          </div>
{/*  */}

          <div className="flex " >
          <QuantitySelector
            quantity={quantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
           <ColoredButton onClick={handleAddToCart} color={selectedColor}>
            Add to Cart
          </ColoredButton>{" "}

          </div>
          {/*  */}
         
          <div>
            <p>Selected Size: {selectedSize}</p>
            <p>
              Price: $
              {product.colors
                .find((color) => color.name === selectedColor)
                ?.sizes.find((size) => size.size === selectedSize)
                ?.price.toFixed(2)}
            </p>
          </div>
         
        </div>
        {/* product */}
      </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Color Buttons */}
      {/*  */}
      {/* <div>
        {product.colors
          .find((color) => color.name === selectedColor)
          ?.sizes.map((size) => (
            <CustomRadioButton
              key={size.size}
              checked={selectedSize === size.size}
              onChange={() => handleSizeChange(size.size)}
              label={size.size}
            />
          ))}
      </div> */}
      {/* Quantity Selector */}
      {/* <QuantitySelector
        quantity={quantity}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
      /> */}
      {/* Display selected size and price */}
      {/* <div>
        <p>Selected Size: {selectedSize}</p>
        <p>
          Price: $
          {product.colors
            .find((color) => color.name === selectedColor)
            ?.sizes.find((size) => size.size === selectedSize)
            ?.price.toFixed(2)}
        </p>
      </div> */}
      {/* Add to Cart Button */}
      <ProductOutline/>
    </div>
  );
};

export default Product;
