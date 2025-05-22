import {createContext,PropsWithChildren,useContext} from 'react'
import { CartItem,Product } from '../types';
import { useState } from 'react';
import { randomUUID } from 'expo-crypto';

type CartType = {
  items: CartItem[],  
  addItems: (product:Product,size:CartItem['size']) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
}
const CartContext = createContext<CartType>({
  items: [],
  addItems: () => {},
  updateQuantity: () => {}
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  // ADD ITEM
  const addItem = (product:Product,size:CartItem['size']) => {
    // already in cart
    const existingItem = items.find(item => item.product_id === product.id && item.size === size);
    if (existingItem) {
      return updateQuantity(existingItem.id,1);
    }
    const newCartItem: CartItem = {
      id: randomUUID(), //generate from crypto
      product,
      product_id: product.id,
      size,
      quantity: 1
    }
    setItems([...items,newCartItem]);
  }
  // UPDATE QTY
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(items.map((item) => 
      item.id !== itemId ? item : {...item,quantity: item.quantity + amount}
    ).filter((item) => item.quantity > 0))
  }
  // TOTAL
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{items,addItem,updateQuantity,total}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export const useCart = () => useContext(CartContext);