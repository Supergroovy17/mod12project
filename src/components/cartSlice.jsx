import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(sessionStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      sessionStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find(item => item.id === id);
      if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
        sessionStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    removeProductFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      sessionStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      sessionStorage.removeItem('cart');
    },
  },
});

export const { addProductToCart, updateProductQuantity, removeProductFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
