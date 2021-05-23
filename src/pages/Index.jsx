import { useState } from "react";
import React from "react";
import Onboarding from "../components/Onboarding";

export default function Index() {
  const [pos, setPos] = useState(0);

  return (
    <div className="pt-8 pb-20 bg-gray-800 text-white">
      <div className="mb-4">
        <h1 className="text-center font-bold text-2xl">Kuesioner skripsi</h1>
        <p className="text-center font-bold text-2xl">
          Muhammad Raharditya Athafitra
        </p>
      </div>

      <div className="max-w-xl text-sm mx-auto">
        {pos === 0 && <Onboarding />}
        {pos === 1 && <p>HI</p>}
      </div>
    </div>
  );
}
