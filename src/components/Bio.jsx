import React from "react";

export default function Bio(props) {
  return (
    <div className="py-6 px-8">
      <form>
        <div className="mb-8">
          <h2 className="mb-3 font-bold">Nama</h2>
          <input
            value={props.answers.name}
            onChange={(event) => props.handleBio("name", event.target.value)}
            type="text"
            className="border border-gray-500 w-full rounded-lg py-2 px-2"
          />
        </div>

        <div className="mb-8">
          <h2 className="mb-3 font-bold">Jenis Kelamin</h2>
          <div className="">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="sex"
                id="sex0"
                value={0}
                checked={props.answers.sex === 0}
                onChange={() => props.handleBio("sex", 0)}
              />
              <label htmlFor="sex0" className="pl-2">
                Laki-laki
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="sex"
                id="sex1"
                value={1}
                checked={props.answers.sex === 1}
                onChange={() => props.handleBio("sex", 1)}
              />
              <label htmlFor="sex1" className="pl-2">
                Perempuan
              </label>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 font-bold">Umur</h2>
          <input
            value={props.answers.age}
            onChange={(event) => props.handleBio("age", event.target.value)}
            type="number"
            className="border border-gray-500 w-full rounded-lg py-2 px-2"
          />
        </div>

        <div className="mb-8">
          <h2 className="mb-3 font-bold">Pendidikan Terakhir</h2>

          <div className="">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="education"
                id="education0"
                value={0}
                checked={props.answers.education === 0}
                onChange={() => props.handleBio("education", 0)}
              />
              <label htmlFor="education0" className="pl-2">
                SMP
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="education"
                id="education1"
                value={1}
                checked={props.answers.education === 1}
                onChange={() => props.handleBio("education", 1)}
              />
              <label htmlFor="education1" className="pl-2">
                SMA
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="education"
                id="education2"
                value={2}
                checked={props.answers.education === 2}
                onChange={() => props.handleBio("education", 2)}
              />
              <label htmlFor="education2" className="pl-2">
                D3
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="education"
                id="education3"
                value={3}
                checked={props.answers.education === 3}
                onChange={() => props.handleBio("education", 3)}
              />
              <label htmlFor="education3" className="pl-2">
                S1
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="education"
                id="education4"
                value={4}
                checked={props.answers.education === 4}
                onChange={() => props.handleBio("education", 4)}
              />
              <label htmlFor="education4" className="pl-2">
                S2
              </label>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="font-bold">Nomor Whatsapp</h2>
          <small className="block mb-3">
            (Opsional, digunakan untuk pengundian hadiah)
          </small>
          <input
            type="tel"
            className="border border-gray-500 w-full rounded-lg py-2 px-2"
            value={props.answers.phoneNum}
            onChange={(event) =>
              props.handleBio("phoneNum", event.target.value)
            }
          />
        </div>
      </form>
    </div>
  );
}
