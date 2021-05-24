import React from "react";
import { Link } from "react-router-dom";

export default function Onboarding() {
  return (
    <div className="py-6 px-8">
      <p className="mb-4">Assalamu'alaikum Wr.Wb.</p>

      <p className="mb-4">
        Perkenalkan saya Muhammad Raharditya Athafitra, Mahasiswa S1 Ilmu
        Administrasi Negara dari Universitas Sebelas Maret (UNS) Surakarta. Saat
        ini saya sedang melakukan penelitian skripsi yang berjudul
        "Faktor-faktor yang Mempengaruhi Penerimaan Pengguna Aplikasi Lapor
        Sleman di Kabupaten Sleman".
      </p>

      <p className="mb-4">
        Kuesioner ini digunakan untuk menguji kuesioner penelitian, sehingga
        aplikasi yang diteliti adalah sistem pengaduan ULAS karena kemiripannya
        dengan aplikasi Lapor Sleman. Penelitian ini ditujukan kepada responden
        yang berdomisili di Surakarta yang pernah menggunakan aplikasi atau
        website dari sistem pengaduan ULAS.
      </p>

      <p className="mb-4">
        Maka dari itu, saya memohon kesediaan Saudara/i untuk mengisi kuesioner
        penelitian saya. Segala data yang diberikan hanya digunakan untuk
        kepentingan penelitian dan tidak akan disebarkan ke pihak manapun.
      </p>

      <p className="mb-4">
        Atas kesediaan dan partisipasi Bapak/Ibu/Saudara/i dalam mengisi
        kuesioner ini, saya ucapkan banyak terimakasih.
      </p>

      <div className="mx-auto py-4 px-6 bg-green-100 rounded-lg flex gap-6 items-center">
        <div className="p-6 rounded-lg bg-green-300"></div>
        <div className="">
          <h2 className="font-bold text-md mb-4">
            Akan dibagi 100rb saldo Ovo/Dana/Gopay untuk 5 pengisi beruntung
          </h2>
          <Link>
            <a href="/undian" className="underline">
              Lihat informasinya di sini
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
