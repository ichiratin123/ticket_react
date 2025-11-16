import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Seat from "./seat";
import { markBooked } from "./slice.js";
import TableBooked from "./table.jsx";

export default function SeatList() {
  const dispatch = useDispatch();

  const seatData = useSelector((state) => state.seatChooseReducer);
  const selected = useSelector((state) => state.seatChooseReducer.selected);

  const handleConfirm = () => {
    if (selected.length === 0) return alert("Bạn chưa chọn ghế!");
    dispatch(markBooked(selected));
    alert("Đặt ghế thành công!");
  };

  return (
    <div className="container mx-auto flex justify-between">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3 text-white">Chọn Ghế</h2>

        {seatData?.seat?.map((row, index) => (
          <div key={index} className="flex items-center mb-2 text-white">
            <div className="w-6 font-bold">{row.hang}</div>

            <div className="flex flex-wrap">
              {row.danhSachGhe.map((g) => (
                <Seat key={g.soGhe} seat={g} />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-4">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded mr-3"
          >
            Xác nhận ({selected.length})
          </button>
        </div>
      </div>
      <div className="">
        <TableBooked></TableBooked>
      </div>
    </div>
  );
}
