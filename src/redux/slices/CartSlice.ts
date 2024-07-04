import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface CartItem {
    id: number;
    name: string;
    color: string;
    size: string;
    count: number;
    unitPrice: number;
    totalPrice: number;
  }
  
  export interface CartState {
    items: CartItem[];
    totalPrice: number;
  }
  
  export interface RemoveItemPayload {
    id: number;
    color: string;
    size: string;
  }
  
  export interface UpdateItemCountPayload {
    id: number;
    color: string;
    size: string;
    count: number;
  }
  
  const initialState: CartState = {
    items: [],
    totalPrice: 0
  };

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{

    }

  })

  export const {  } = cartSlice.actions;
export default cartSlice.reducer;
  