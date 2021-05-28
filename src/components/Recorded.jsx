import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Info } from "../assets/info.svg";

export default function Recorded() {
  return (
    <div className="px-6 py-8">
      <div className="text-center">
        <h2 className="font-bold text-xl mb-6">Terimakasih!</h2>
        <p className="text-gray-500">
          Respon yang Anda kirimkan sudah kami terima 😃
        </p>
      </div>

      <div className="flex items-center mt-10 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-4">
        <div className="p-3 mr-4 rounded-full bg-gray-200">
          <Info />
        </div>
        <div className="">
          <p className="">
            Anda akan dihubungi melalui Whatsapp jika beruntung.
          </p>
          <Link to="/undian" className="block mt-2 underline text-purple-800">
            Lebih lanjut
          </Link>
        </div>
      </div>
    </div>
  );
}
