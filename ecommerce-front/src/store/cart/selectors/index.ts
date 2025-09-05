import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
export type { RootState };