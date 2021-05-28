import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { analytics } from "../firebase";
// import { ReactComponent as Info } from "../assets/info.svg";

export default function Undian() {
  useEffect(() => {
    analytics.logEvent("page_view", {
      page_path: "/undian",
    });
  }, []);

  return (
    <div className="min-h-screen max-w-xl text-sm mx-auto px-6 py-8 flex items-center justify-center">
      <div className="py-7 px-8 bg-white credentials rounded-xl shadow-lg">
        <h1
          className="font-bold text-2xl text-center mb-6"
          style={{ color: "#FF5851" }}
        >
          Pengumuman Undian Responden
        </h1>

        <p className="mb-4">
          Akan dibagikan saldo dompet elektronik dengan total sebesar 350rb
          rupiah untuk 5 responden yang beruntung. 2 responden yang terpilih
          akan mendapatkan saldo 100rb dan 3 responden terpilih akan mendapatkan
          saldo 50rb.
        </p>
        <p className="mb-4">
          Pemenang undian ditentukan menggunakan tools online yang digunakan
          untuk memilih pemenang secara acak.
        </p>
        <p className="mb-4">
          Pemenang undian akan dihubungi melalui Whatsapp ketika undian sudah
          dilakukan. Daftar pemenang juga akan diumumkan di halaman ini
          (informasi pribadi akan disensor)
        </p>
        <p className="mb-4">
          Pemenang kemudian akan memilih dompet elektronik apa yang diinginkan
          untuk mendapatkan hadiah tersebut.
        </p>
        <p className="mb-4">
          Jika pemenang tidak membalas pesan Whatsapp selama 1x24 jam atau
          pemenang tidak memasukkan nomor Whatsapp, maka hadiah akan diberikan
          ke responden lain (pengundian ulang)
        </p>
        {/* <div className="flex items-center mt-10 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-4">
            <div className="p-3 mr-4 rounded-full bg-gray-200">
              <Info />
            </div>
            <div className="">
              <p className="font-bold">Undian akan</p>
            </div>
          </div> */}

        <Link
          to="/"
          className="block mt-8 underline text-purple-800 text-center"
        >
          Kembali ke kuesioner
        </Link>
      </div>
    </div>
  );
}
