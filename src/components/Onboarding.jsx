import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Info } from "../assets/info.svg";

export default function Onboarding() {
  return (
    <div className="py-6 px-8">
      <p className="mb-4">Assalamu'alaikum Wr.Wb.</p>

      <p className="mb-4">
        Perkenalkan saya <strong>Muhammad Raharditya Athafitra</strong>,
        Mahasiswa S1 Ilmu Administrasi Negara dari Universitas Sebelas Maret
        (UNS) Surakarta. Saat ini saya sedang melakukan penelitian skripsi yang
        berjudul{" "}
        <strong className="italic">
          "Faktor-faktor yang Mempengaruhi Penerimaan Pengguna Aplikasi Lapor
          Sleman di Kabupaten Sleman"
        </strong>
        .
      </p>

      <p className="mb-4">
        Penelitian ini ditujukan kepada responden yang berdomisili di Sleman
        yang pernah menggunakan aplikasi dari sistem pengaduan Lapor Sleman.
      </p>

      <p className="mb-4">
        Maka dari itu, saya memohon kesediaan Saudara/i untuk mengisi kuesioner
        penelitian saya. Segala data yang diberikan hanya digunakan untuk
        kepentingan penelitian dan tidak akan disebarkan ke pihak manapun.
      </p>

      <p className="mb-4">
        Survei ini membutuhkan waktu sekitar 3 menit. Dengan mengklik tombol
        "Lanjut", maka Saudara/i setuju untuk terlibat dalam survei ini.
      </p>

      <p className="mb-4">
        Atas kesediaan dan partisipasi Bapak/Ibu/Saudara/i dalam mengisi
        kuesioner ini, saya ucapkan banyak terimakasih.
      </p>

      <div className="mx-auto py-3 px-4 bg-white rounded-xl shadow-xl border border-gray-100">
        <div className="flex items-center">
          <div className="p-3 mr-4 rounded-full bg-gray-200">
            <Info />
          </div>
          <div className="">
            <h2 className="font-bold text-md">
              Akan dibagi 350rb saldo dompet digital kepada 5 responden
              beruntung
            </h2>
          </div>
        </div>
        <Link
          to="/undian"
          className="underline block mt-4 text-center text-purple-800"
        >
          Lebih lanjut
        </Link>
      </div>
    </div>
  );
}
