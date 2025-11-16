import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";
import { act } from "react";

const initialState = {
    seat: data,
    selected: [],
    recentBooked: [],
}

const seatSlice = createSlice({
    name: "seatChoose",
    initialState,
    reducers: {
        selectAction(state, action) { 
            const seatID = action.payload;
            const idx = state.selected.indexOf(seatID);
            if (idx === -1) {
                state.selected.push(seatID);
            } else {
                state.selected.splice(idx, 1);
            }
        },

        markBooked(state, action) {
            const list = action.payload;

            state.seat = state.seat.map(row => ({
                ...row,
                danhSachGhe: row.danhSachGhe.map(g => {
                    if (list.includes(g.soGhe)) {
                        return { ...g, daDat: true };
                    }
                    return g;
                })
            }));
            state.selected = state.selected.filter(s => !list.includes(s));
            state.recentBooked = list;
        }
    }
})
export const { selectAction, markBooked } = seatSlice.actions;
export default seatSlice.reducer;