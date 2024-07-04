import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ProductState {
    selectedColor: string;
    selectedSize: string;
    mainImage: string;
  }
  const initialState: ProductState = {
    selectedColor: 'Red',
    selectedSize: 'S',
    mainImage: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Red'
  };
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{

    }

})
export const { } = productSlice.actions;
export default productSlice.reducer;