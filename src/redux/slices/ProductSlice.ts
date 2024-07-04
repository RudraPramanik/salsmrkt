import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../../types/types";

import productData from "../../utils/constant";

const initialColor = productData.colors[0];
const initialSize = initialColor.sizes[0];

const initialState: ProductState = {
  selectedColor: initialColor.name,
  selectedSize: initialSize.size,
  mainImage: initialColor.image,
};
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setColor: (state:ProductState, action: PayloadAction<{ color: string; mainImage: string }>) => {
          state.selectedColor = action.payload.color;
          state.mainImage = action.payload.mainImage;
          state.selectedSize = 'S';
        },
        setSize: (state:ProductState, action: PayloadAction<string>) => {
          state.selectedSize = action.payload;
        }
      }

})
export const {  setColor, setSize } = productSlice.actions;
export default productSlice.reducer;