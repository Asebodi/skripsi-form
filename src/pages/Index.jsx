import { useState, useRef } from "react";
import React from "react";

import pernyataan from "../pernyataan";
import Onboarding from "../components/Onboarding";
import Form from "../components/Form";
import Finish from "../components/Finish";
// import { CSSTransition } from "react-transition-group";

export default function Index() {
  const [pos, setPos] = useState(0);
  const pageStartRef = useRef(null);
  // const [mainHeight, setMainHeight] = useState(null);

  // function calcHeight(el) {
  //   const height = el.offsetHeight;
  //   setMainHeight(height);
  // }

  const [PE, setPE] = useState({});

  const [EE, setEE] = useState({});

  function scrollToTop() {
    pageStartRef.current?.scrollIntoView({ behavior: "smooth" });
  }

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
      scrollToTop();
    }
  }

  function handleNext(e) {
    e.preventDefault();

    if (pos <= 3) {
      setPos(pos + 1);
      scrollToTop();
    }
  }

  return (
    <div className="pt-8 pb-20 px-6" ref={pageStartRef}>
      <div className="mb-10">
        <h1 className="text-center font-bold text-2xl text-yellow-500">
          Kuesioner Skripsi
        </h1>
        <p className="text-center font-bold mt-2 text-gray-500">
          Muhammad Raharditya Athafitra
          <br />
          FISIP UNS
        </p>
      </div>

      <main
        className="relative max-w-xl text-sm mx-auto bg-white shadow-xl rounded-xl text-gray-900 transition duration-150"
        // style={{ minHeight: "100vh" }}
      >
        {pos === 0 && <Onboarding />}
        {pos === 1 && (
          <Form data={pernyataan[0]} selected={EE} handleItem={handleItem} />
        )}
        {pos === 2 && (
          <Form data={pernyataan[1]} selected={PE} handleItem={handleItem} />
        )}
        {pos === 3 && <Finish />}

        {/* <CSSTransition
          in={pos === 0}
          timeout={500}
          classNames="my-node"
          onEnter={calcHeight}
          unmountOnExit
        >
          <Onboarding />
        </CSSTransition>
        <CSSTransition
          in={pos === 1}
          timeout={500}
          classNames="my-node"
          onEnter={calcHeight}
          unmountOnExit
        >
          <Form data={pernyataan[0]} selected={EE} handleItem={handleItem} />
        </CSSTransition>
        <CSSTransition
          in={pos === 2}
          timeout={500}
          classNames="my-node"
          onEnter={calcHeight}
          unmountOnExit
        >
          <Form data={pernyataan[1]} selected={PE} handleItem={handleItem} />
        </CSSTransition>
        <CSSTransition
          in={pos === 3}
          timeout={500}
          classNames="my-node"
          onEnter={calcHeight}
          unmountOnExit
        >
          <Finish />
        </CSSTransition> */}

        <div
          className={`flex items-center justify-between mt-8 px-8 py-6 ${
            pos === 3 && "hidden"
          }`}
        >
          {/* <div className={`flex items-center justify-between mt-8 px-8 py-6`}> */}
          <button
            className={`py-2 px-6 rounded-lg border border-gray-400 shadow-lg focus:shadow-sm transition duration-150 ${
              pos === 0 ? "opacity-50" : ""
            }`}
            disabled={pos === 0}
            onClick={handlePrev}
          >
            Kembali
          </button>
          <button
            className="py-2 px-6 rounded-lg border border-gray-400 shadow-lg focus:shadow-sm transition duration-150 "
            onClick={handleNext}
          >
            Lanjut
          </button>
        </div>
      </main>

      <div className="h-4 border w-3/5 mx-auto border-gray-300 shadow-lg rounded-full bg-white mt-10">
        <div
          className={`h-full bg-green-500 rounded-full transition-all duration-150 ${
            pos === 0
              ? "w-1/4"
              : pos === 1
              ? "w-2/4"
              : pos === 2
              ? "w-3/4"
              : "w-full"
          }`}
        ></div>
      </div>
      <p className="text-center text-sm mt-2">Halaman {pos + 1} dari 4</p>
    </div>
  );
}
