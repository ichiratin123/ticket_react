import React from "react";
import { useSelector } from "react-redux";

export default function TableBooked() {
  const data = useSelector((state) => state.seatChooseReducer);
  const bookedSeat = useSelector(
    (state) => state.seatChooseReducer.recentBooked
  );
  const bookedSeats = data?.seat
    ?.flatMap((row) => row.danhSachGhe)
    .filter((s) => bookedSeat.includes(s.soGhe));

  const total = bookedSeats.reduce((sum, s) => sum + (s.gia || 0), 0);

  if (bookedSeats.length === 0) {
    return <div className="p-4 text-gray-400">Chưa có ghế nào được đặt.</div>;
  }
  return (
    <div className="p-4 mt-6 border rounded bg-transparent text-white w-3xl">
      <h2 className="text-lg font-bold mb-3">Danh sách ghế đã đặt</h2>

      <table className="w-full border text-sm">
        <thead className="bg-transparent">
          <tr>
            <th className="border p-2 text-left">
              <span className="font-bold">Ghế</span>
            </th>
            <th className="border p-2 text-left">
              <span className="font-bold">Giá (VND)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {bookedSeats.map((seat) => (
            <tr key={seat.soGhe}>
              <td className="border p-2">
                {" "}
                <span className="text-amber-300"> {seat.soGhe}</span>
              </td>
              <td className="border p-2">
                <span className="text-amber-300">
                  {seat.gia.toLocaleString()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right font-bold text-lg">
        Tổng tiền:{" "}
        <span className="text-amber-300">{total.toLocaleString()} VND</span>
      </div>
    </div>
  );
}
