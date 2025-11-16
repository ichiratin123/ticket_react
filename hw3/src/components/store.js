import { configureStore } from "@reduxjs/toolkit";
import seatChooseReducer from "./slice.js"
const store = configureStore({
    reducer: {
        seatChooseReducer,
    }
}
);

export default store;