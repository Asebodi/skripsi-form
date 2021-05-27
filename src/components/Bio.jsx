import React from "react";

export default function Bio() {
  return (
    <div className="py-6 px-8">
      <form>
        <div className="mb-8">
          <h2 className="mb-3 font-bold">Nama</h2>
          <input
            type="text"
            className="border border-gray-500 w-full rounded-lg py-2 px-2"
          />
        </div>

        <div className="mb-8">
          <h2 className="mb-3 font-bold">Jenis Kelamin</h2>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="sex" id="sex0" value="laki-laki" />
            <label htmlFor="sex0">Laki-laki</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="sex" id="sex1" value="perempuan" />
            <label htmlFor="sex1">Perempuan</label>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 font-bold">Umur</h2>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="age" id="age0" value="17 - 24 Tahun" />
            <label htmlFor="age0">17 - 24 Tahun</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="age" id="age1" value="25 - 34 Tahun" />
            <label htmlFor="age1">25 - 34 Tahun</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="age" id="age2" value="35 - 49 Tahun" />
            <label htmlFor="age2">35 - 49 Tahun</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="age" id="age3" value="50 - 64 Tahun" />
            <label htmlFor="age3">50 - 64 Tahun</label>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="age" id="age4" value="65 tahun keatas" />
            <label htmlFor="age4">65 tahun keatas</label>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 font-bold">Nomor Whatsapp</h2>
          <input
            type="telephone"
            className="border border-gray-500 w-full rounded-lg py-2 px-2"
          />
        </div>
      </form>
    </div>
  );
}
