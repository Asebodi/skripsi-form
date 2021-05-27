import { useState, useRef, useEffect } from "react";
import useLocalStorage from "../useLocalStorage";
import React from "react";

import pernyataan from "../pernyataan";
import Onboarding from "../components/Onboarding";
import Form from "../components/Form";
import Finish from "../components/Finish";
import { analytics, firestore } from "../firebase";
import { toast } from "react-toastify";
import Bio from "../components/Bio";
import Recorded from "../components/Recorded";

export default function Index() {
  const pageStartRef = useRef(null);

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [submitInfo, setSubmitInfo] = useLocalStorage("submitInfo", null);

  useEffect(() => {
    analytics.logEvent("page_view", {
      page_path: "/",
    });

    if (submitInfo) {
      setHasSubmitted(true);
    }
  }, [submitInfo]);

  const [pos, setPos] = useState(0);

  const [answers, setAnswers] = useState({
    name: "",
    phoneNum: "",
    ageRange: "",
    sex: "",
    EE1: "",
    EE2: "",
    EE3: "",
    EE4: "",
    PE1: "",
    PE2: "",
    PE3: "",
  });

  const [PE, setPE] = useState({
    selected: [],
  });
  const [EE, setEE] = useState({
    selected: [],
  });

  function scrollToTop() {
    pageStartRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleBio(event, item, value) {
    event.preventDefault();

    setAnswers({ ...answers, [item]: value });
  }

  function handleItem(event, id, item, value, actualValue) {
    event.preventDefault();
    console.log(id, item, value);

    setAnswers({ ...answers, [item]: actualValue });
    console.log(answers);

    switch (id) {
      case "PE":
        const PEfilter = PE.selected.filter(
          (currentItem) => currentItem === item
        );

        if (PEfilter.length !== 0) {
          console.log("Repicked");
          return setPE({
            ...PE,
            [item]: value,
          });
        } else {
          return setPE({
            ...PE,
            [item]: value,
            selected: [...PE.selected, item],
          });
        }

      case "EE":
        const EEfilter = EE.selected.filter(
          (currentItem) => currentItem === item
        );

        if (EEfilter.length !== 0) {
          console.log("Repicked");
          return setEE({
            ...EE,
            [item]: value,
          });
        } else {
          return setEE({
            ...EE,
            [item]: value,
            selected: [...EE.selected, item],
          });
        }

      default:
        break;
    }
  }

  function checkAnswerCount() {
    switch (pos) {
      case 0:
        return true;

      case 1:
        return true;

      case 2:
        console.log(EE);
        if (EE.selected.length !== pernyataan[0].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      case 3:
        console.log(PE);
        if (PE.selected.length !== pernyataan[1].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      default:
        break;
    }
  }

  function checkBio() {
    if (answers.name && answers.ageRange && answers.sex) {
      return true;
    } else {
      toast.error("Data belum lengkap!");
      return false;
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
    if (pos === 0) {
      analytics.logEvent("questionnaire_start");
      setPos(pos + 1);
      scrollToTop();
      return;
    }

    if (pos === 1) {
      analytics.logEvent("next_button", {
        position: pos,
      });

      if (checkBio()) {
        console.log(answers);
        setPos(pos + 1);
        scrollToTop();
      }
      return;
    }

    if (pos <= 3) {
      e.preventDefault();

      analytics.logEvent("next_button", {
        position: pos,
      });

      if (checkAnswerCount()) {
        setPos(pos + 1);
        scrollToTop();
        return;
      }
    }
  }

  function handleSubmit() {
    analytics.logEvent("submit_button");
    const now = new Date();
    const firestoreRef = firestore
      .collection("respondents-test")
      .doc(String(now.valueOf()));

    console.log(answers);

    if (checkAnswerCount()) {
      firestoreRef
        .set(answers)
        .then(() => {
          console.log("Success!");
          analytics.logEvent("success_send");
          toast.success("Jawaban berhasil disimpan");

          setSuccessSubmit(true);
          setSubmitInfo({
            timeSubmitted: now,
            id: now.valueOf(),
            answers: { PE, EE },
          });
        })
        .catch((err) => {
          console.log(err);
          analytics.logEvent("exception", {
            description: err.message,
          });
          toast.error(`Error: ${err.message}`);
        });
    }
  }

  // setSubmitInfo({});
  console.log(successSubmit);
  console.log(hasSubmitted);

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
        {hasSubmitted ? (
          <Recorded />
        ) : successSubmit ? (
          <Finish />
        ) : (
          <>
            {pos === 0 && <Onboarding />}
            {pos === 1 && <Bio answers={answers} handleBio={handleBio} />}
            {pos === 2 && (
              <Form
                data={pernyataan[0]}
                selected={EE}
                handleItem={handleItem}
              />
            )}
            {pos === 3 && (
              <Form
                data={pernyataan[1]}
                selected={PE}
                handleItem={handleItem}
              />
            )}
          </>
        )}

        {successSubmit === false ? (
          hasSubmitted === false ? (
            <div className={`flex items-center justify-between mt-8 px-8 py-6`}>
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
              {pos === 3 ? (
                <button
                  className="py-2 px-6 rounded-lg border border-gray-400 shadow-lg focus:shadow-sm transition duration-150 "
                  onClick={handleSubmit}
                >
                  Kirim
                </button>
              ) : (
                <button
                  className="py-2 px-6 rounded-lg border border-gray-400 shadow-lg focus:shadow-sm transition duration-150 "
                  onClick={handleNext}
                >
                  Lanjut
                </button>
              )}
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </main>

      <div
        className={`max-w-xl mx-auto ${
          successSubmit || hasSubmitted ? "hidden" : ""
        }`}
      >
        <div className="h-4 border w-3/5 mx-auto border-gray-300 shadow-lg rounded-full bg-white mt-10">
          <div
            className={`h-full bg-green-500 rounded-full transition-all duration-150 ${
              pos === 0 || pos === 1
                ? "w-1/4"
                : pos === 2
                ? "w-2/4"
                : pos === 3
                ? "w-3/4"
                : successSubmit
                ? "w-full"
                : ""
            }`}
          ></div>
        </div>
        <p className="text-center text-sm mt-2">Halaman {pos + 1} dari 5</p>
      </div>
    </div>
  );
}
