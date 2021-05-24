import React from "react";
import { ReactComponent as Info } from "../assets/info.svg";

export default function Finish() {
  return (
    <div className="px-6 py-8">
      <div className="text-center">
        <h2 className="font-bold text-xl mb-6">Terimakasih!</h2>
        <p className="text-gray-500">
          Respon yang Anda kirimkan sudah kami terima 😃
        </p>
      </div>

      <div className="flex items-center gap-4 mt-10 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-4">
        <div className="p-3 rounded-full bg-gray-200">
          <Info />
        </div>
        <p className="">
          Anda akan dikontak melalui Whatsapp jika beruntung mendapatkan hadiah.
        </p>
      </div>
    </div>
  );
}
