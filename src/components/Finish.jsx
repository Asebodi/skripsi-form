import React from "react";

export default function Finish() {
  return (
    <div className="px-6 py-8">
      <div className="text-center">
        <h2 className="font-bold text-xl mb-6">Terimakasih!</h2>
        <p className="text-gray-500">
          Respon yang Anda kirimkan sudah kami terima 😃
        </p>
      </div>

      <div className="flex items-center gap-4 mt-10 bg-white shadow-xl rounded-lg py-4 px-8">
        <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
        <p>
          Anda akan dikontak melalui Whatsapp jika beruntung mendapatkan saldo.
        </p>
      </div>
    </div>
  );
}
