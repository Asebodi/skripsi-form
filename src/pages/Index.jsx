import { useState } from "react";
import React from "react";

import pernyataan from "../pernyataan";
import Onboarding from "../components/Onboarding";
import Form from "../components/Form";
import Finish from "../components/Finish";

export default function Index() {
  const [pos, setPos] = useState(1);

  const [PE, setPE] = useState({
    PE1: "",
    PE2: "",
    PE3: "",
  });

  const [EE, setEE] = useState({
    EE1: "",
    EE2: "",
    EE3: "",
  });

  function handleItem(event, id, item, value) {
    event.preventDefault();
    console.log(id, item, value);

    switch (id) {
      case "PE":
        return setPE({ ...PE, [item]: value });

      case "EE":
        return setEE({ ...EE, [item]: value });

      default:
        break;
    }
  }

  function handlePrev(e) {
    e.preventDefault();

    if (pos >= 0) {
      setPos(pos - 1);
    }
  }

  function handleNext(e) {
    e.preventDefault();

    if (pos <= 3) {
      setPos(pos + 1);
    }
  }

  return (
    <div className="pt-8 pb-20 px-6">
      <div className="mb-4">
        <h1 className="text-center font-bold text-2xl text-yellow-500">
          Kuesioner Skripsi
        </h1>
        <p className="text-center font-bold mt-2 text-gray-500">
          Muhammad Raharditya Athafitra
          <br />
          FISIP UNS
        </p>
      </div>

      <main className="max-w-xl text-sm mx-auto bg-white shadow-xl rounded-lg text-gray-900">
        {pos === 0 && <Onboarding />}
        {pos === 1 && (
          <Form data={pernyataan[0]} selected={EE} handleItem={handleItem} />
        )}
        {pos === 2 && (
          <Form data={pernyataan[1]} selected={PE} handleItem={handleItem} />
        )}
        {pos === 3 && <Finish />}

        <div
          className={`flex items-center justify-between mt-8 px-8 py-6 ${
            pos === 3 && "hidden"
          }`}
        >
          <button
            className="py-2 px-6 rounded-lg border border-gray-400"
            onClick={handlePrev}
          >
            Kembali
          </button>
          <button
            className="py-2 px-6 rounded-lg border border-gray-400"
            onClick={handleNext}
          >
            Lanjut
          </button>
        </div>
      </main>
    </div>
  );
}
