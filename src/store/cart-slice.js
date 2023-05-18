import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    // totalAmount: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        //Redux toolkit ensure that push does not manipulate the existing state but that instead transforms this into an operation which updates the state in an immutable way.
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: Number(newItem.price),
          title: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      // const item = action.payload;
      // const itemIndex = state.items.findIndex((i) => i.id === item.id);
      // if (item.quantity === 1 && itemIndex > -1) {
      //   state.items.splice(itemIndex, 1);
      // } else if (item.quantity > 1) {
      //   state.items[itemIndex].quantity -= 1;
      // }
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice;
