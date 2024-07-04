import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState, RemoveItemPayload, UpdateItemCountPayload } from '../../types/types';



  const initialState: CartState = {
    items: [],
    totalPrice: 0
  };

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, 'totalPrice'>>) => {
          const newItem = action.payload;
          const existingItem = state.items.find(
            item => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
          );
    
          if (existingItem) {
            existingItem.count += newItem.count;
            existingItem.totalPrice = existingItem.count * existingItem.unitPrice;
          } else {
            state.items.push({
              ...newItem,
              totalPrice: newItem.count * newItem.unitPrice
            });
          }
    
          state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
          const { id, color, size } = action.payload;
          state.items = state.items.filter(item => !(item.id === id && item.color === color && item.size === size));
          state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        updateItemCount: (state, action: PayloadAction<UpdateItemCountPayload>) => {
          const { id, color, size, count } = action.payload;
          const existingItem = state.items.find(item => item.id === id && item.color === color && item.size === size);
    
          if (existingItem) {
            existingItem.count = count;
            existingItem.totalPrice = existingItem.count * existingItem.unitPrice;
          }
    
          state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        clearCart: (state) => {
          state.items = [];
          state.totalPrice = 0;
        }
      }

  })

  export const {  } = cartSlice.actions;
export default cartSlice.reducer;
  