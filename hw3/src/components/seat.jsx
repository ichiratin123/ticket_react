import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAction } from "./slice.js";

export default function Seat({ seat }) {
  const dispatch = useDispatch();
  const { soGhe, daDat } = seat;
  const selected = useSelector((state) => state.seatChooseReducer.selected);
  const isSelected = selected.includes(soGhe);

  const handleClick = () => {
    if (!daDat) dispatch(selectAction(soGhe));
  };

  return (
    <div
      onClick={handleClick}
      className={`
                w-10 h-10 flex items-center justify-center 
                m-1 rounded cursor-pointer text-white text-sm
                ${
                  daDat
                    ? "bg-gray-400 cursor-not-allowed"
                    : isSelected
                    ? "bg-blue-600 hover:bg-blue-800"
                    : "bg-green-600 hover:bg-green-800"
                }
            `}
    >
      {soGhe}
    </div>
  );
}
