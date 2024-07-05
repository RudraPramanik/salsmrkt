import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setColor, setSize } from "../redux/slices/ProductSlice";
import { addItem } from "../redux/slices/CartSlice";
import productData from "../utils/constant";
import Gallery from "../components/product-page/ProductGallary";
import CustomRadioButton from "../components/ui/SharedComponent/CustomRadioButton";
import ColorSelectButton from "../components/ui/SharedComponent/ColorSelectButton";
import QuantitySelector from "../components/ui/QuantitySelect";
import ColoredButton from "../components/ui/SharedComponent/CButton";
import ProductDescription from "../components/ui/ProductDescription";
import Text from "../components/ui/SharedComponent/Text";
import ProductOutline from "../components/product-page/ProductOutline";
import { CartIcon, VanIcon } from "../components/icons";
import DeliveryQuote from "../components/ui/SharedComponent/DeliveryQuoto";

const ProductPage: React.FC = () => {
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
          image: selectedColorObject.image,
        })
      );
      setQuantity(1);
    }
  };

  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 ">
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
            <ProductDescription />
          </div>
          {/* price */}
          <div className=" flex space-x-8 items-center py-4 md:py-8 2xl:py-10 3xl:py-12 border-b border-primary-gray ">
            <Text variant="heading2xl" fontWeight="semibold" color="black">
              {`$`}
              {product.colors
                .find((color) => color.name === selectedColor)
                ?.sizes.find((size) => size.size === selectedSize)
                ?.price.toFixed(2)}
            </Text>
            <Text variant="bodyMd" className=" line-through " color="gray">
              $71.56
            </Text>
          </div>
          {/* prices */}
          {/* color */}
          <div className="border-b border-primary-gray pb-6 md:pb-8 xl:pb-12 2xl:pb-16 3xl:pb-16 4xl:pb-20  ">
            <Text variant="bodyXs" className="my-4" color="gray">
              choose a color:
            </Text>
            <div className="flex space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 3xl:space-x-12 4xl:space-x-14 " >
              {product.colors.map((color) => (
                <ColorSelectButton
                  key={color.name}
                  color={color.name}
                  checked={selectedColor === color.name}
                  onClick={() => handleColorChange(color.name, color.image)}
                />
              ))}
            </div>
          </div>
          {/* color */}

          {/* size */}
          <div className="py-4 md:py-8 2xl:py-10 3xl:py-12 border-b space-y-4 border-primary-gray ">
            <Text variant="bodyXs" color="gray">
              choose a size:
            </Text>

            <div className=" grid grid-cols-3 sm:flex sm:space-x-4 ">
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
          {/* size */}

          <div className="flex py-4 md:py-8 2xl:py-10 3xl:py-12 space-x-3 sm:space-x-6  ">
            <QuantitySelector
              quantity={quantity}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
            <ColoredButton onClick={handleAddToCart} color={selectedColor}>
              <CartIcon stroke="white" className="w-4 h-4" />
              <Text variant="bodySm" color="white">
                {" "}
                Add to Cart
              </Text>
            </ColoredButton>
          </div>
          {/*  */}
          <div className=" border rounded-2xl p-2 ">
            <DeliveryQuote
              description="Enter your Postal code for Delivery Availability"
              icon={<VanIcon className="w-6 h-6" />}
              heading="Free Delivery"
            />
            <div className={`border-b mx-2 my-2 `}></div>
            <DeliveryQuote
              description="Enter your Postal code for Delivery Availability"
              icon={<CartIcon string="#D75951" className="w-6 h-6" />}
              heading="Free Delivery"
            />
          </div>
          {/*  */}
        </div>
      </div>
      <ProductOutline />
    </div>
  );
};

export default ProductPage;
