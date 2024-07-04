export interface ProductState {
    selectedColor: string;
    selectedSize: string;
    mainImage: string;
  }

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
  