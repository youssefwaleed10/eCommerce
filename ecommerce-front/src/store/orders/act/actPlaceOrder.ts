import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import type { RootState } from "@store/index";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, auth } = getState() as RootState;

    // build items list from cart
    const orderItems = cart.productsFullInfo.map((el) => ({
      id: el.id,
      title: el.title,
      price: el.price,
      img: el.img,
      quantity: cart.items[el.id],
    }));

    try {
      const res = await axios.post(
        "http://localhost:5005/orders", // make sure backend runs on this port
        {
          userId: auth.user?.id,
          total: subtotal, // must be "total" (matches your db.json)
          items: orderItems,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`, // pass JWT
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actPlaceOrder;
export type { RootState };
