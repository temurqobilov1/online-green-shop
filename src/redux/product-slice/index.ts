import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../@types";

interface IState {
  data: ProductType[];
  coupon: number;
}

const initialState: IState = {
  data: JSON.parse(localStorage.getItem("shop") as string) || [],
  coupon: 0,
};

export const prodcut_slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getData(state, { payload }) {
      if (state.data.find((item) => item._id === payload._id)) {
        state.data = state.data.map((value) => {
          if (value._id === payload._id) {
            return {
              ...value,
              count: Number(value.count) + 1,
              userPrice: (Number(value.count) + 1) * value.price,
            };
          }
          return value;
        });

        localStorage.setItem("shop", JSON.stringify(state.data));
        return;
      }
      state.data = [
        ...state.data,
        { ...payload, userPrice: payload.price, count: 1 },
      ];

      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    removeData(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    getCouponCode(state, { payload }) {
      state.coupon = payload;
    },
    incrementCount(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload
          ? { ...value, count: Number(value.count) + 1 }
          : value
      );
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    decrementCount(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload
          ? { ...value, count: Number(value.count) - 1 }
          : value
      );
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    removeShopData(state) {
      state.data = [];
      state.coupon = 0;
      localStorage.removeItem("shop");
    },
  },
});

export const {
  getData,
  removeData,
  getCouponCode,
  incrementCount,
  decrementCount,
  removeShopData,
} = prodcut_slice.actions;

export default prodcut_slice.reducer;
