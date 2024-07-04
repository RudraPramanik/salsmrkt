import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../../types/types";



  const initialState: ProductState = {
    selectedColor: 'Red',
    selectedSize: 'S',
    mainImage: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Red'
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