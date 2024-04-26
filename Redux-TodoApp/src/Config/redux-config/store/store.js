import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../reducrs/todoSlice";

export const store = configureStore({
      reducer: todoReducer

});