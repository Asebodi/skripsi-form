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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Index() {
  const pageStartRef = useRef(null);

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [submitInfo, setSubmitInfo] = useLocalStorage("submitInfo", null);
  const [submitLoading, setSubmitLoading] = useState(false);

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
    age: "",
    education: "",
    sex: "",
  });

  const [PE, setPE] = useState({
    selected: [],
  });
  const [EE, setEE] = useState({
    selected: [],
  });
  const [SI, setSI] = useState({
    selected: [],
  });
  const [FC, setFC] = useState({
    selected: [],
  });
  const [PR, setPR] = useState({
    selected: [],
  });
  const [AT, setAT] = useState({
    selected: [],
  });
  const [BI, setBI] = useState({
    selected: [],
  });

  function scrollToTop() {
    pageStartRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleBio(item, value) {
    setAnswers({ ...answers, [item]: value });
  }

  function handleItem(event, id, item, value, actualValue) {
    event.preventDefault();
    console.log(id, item, value);

    setAnswers({ ...answers, [item]: actualValue });

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

      case "SI":
        const SIfilter = SI.selected.filter(
          (currentItem) => currentItem === item
        );

        if (SIfilter.length !== 0) {
          console.log("Repicked");
          return setSI({
            ...SI,
            [item]: value,
          });
        } else {
          return setSI({
            ...SI,
            [item]: value,
            selected: [...SI.selected, item],
          });
        }

      case "FC":
        const FCfilter = FC.selected.filter(
          (currentItem) => currentItem === item
        );

        if (FCfilter.length !== 0) {
          console.log("Repicked");
          return setFC({
            ...FC,
            [item]: value,
          });
        } else {
          return setFC({
            ...FC,
            [item]: value,
            selected: [...FC.selected, item],
          });
        }

      case "PR":
        const PRfilter = PR.selected.filter(
          (currentItem) => currentItem === item
        );

        if (PRfilter.length !== 0) {
          console.log("Repicked");
          return setPR({
            ...PR,
            [item]: value,
          });
        } else {
          return setPR({
            ...PR,
            [item]: value,
            selected: [...PR.selected, item],
          });
        }

      case "AT":
        const ATfilter = AT.selected.filter(
          (currentItem) => currentItem === item
        );

        if (ATfilter.length !== 0) {
          console.log("Repicked");
          return setAT({
            ...AT,
            [item]: value,
          });
        } else {
          return setAT({
            ...AT,
            [item]: value,
            selected: [...AT.selected, item],
          });
        }

      case "BI":
        const BIfilter = BI.selected.filter(
          (currentItem) => currentItem === item
        );

        if (BIfilter.length !== 0) {
          console.log("Repicked");
          return setBI({
            ...BI,
            [item]: value,
          });
        } else {
          return setBI({
            ...BI,
            [item]: value,
            selected: [...BI.selected, item],
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
        if (PE.selected.length !== pernyataan[0].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      case 3:
        if (EE.selected.length !== pernyataan[1].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      case 4:
        if (SI.selected.length !== pernyataan[2].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      case 5:
        if (FC.selected.length !== pernyataan[3].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      case 6:
        if (PR.selected.length !== pernyataan[4].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      case 7:
        if (AT.selected.length !== pernyataan[5].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      case 8:
        if (BI.selected.length !== pernyataan[6].items.length) {
          toast.error("Masih ada pertanyaan yang kosong!");
          return false;
        }
        return true;

      default:
        break;
    }
  }

  function checkBio() {
    if (
      answers.name &&
      answers.age !== "" &&
      answers.sex !== "" &&
      answers.education !== ""
    ) {
      return true;
    } else {
      toast.error("Data belum lengkap!");
      return false;
    }
  }

  function handlePrev(e) {
    e.preventDefault();

    if (pos > 0) {
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
        setPos(pos + 1);
        scrollToTop();
      }
      return;
    }

    if (pos <= 8) {
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
    if (submitLoading) {
      console.log("already on progress");
      return;
    }

    analytics.logEvent("submit_button");
    const now = new Date();
    const firestoreRef = firestore
      .collection("respondents")
      .doc(String(now.valueOf()));

    if (checkAnswerCount()) {
      setSubmitLoading(true);

      firestoreRef
        .set({ ...answers, timeSubmitted: now })
        .then(() => {
          console.log("Success!");
          analytics.logEvent("success_send");
          toast.success("Jawaban berhasil disimpan");

          setSuccessSubmit(true);
          setSubmitInfo({
            timeSubmitted: now,
            id: now.valueOf(),
            answers,
          });
          setSubmitLoading(false);
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
  // console.log(successSubmit);
  // console.log(hasSubmitted);

  return (
    <div className="pt-8 pb-20 px-6" ref={pageStartRef}>
      <div className="mb-10">
        <h1
          className="text-center text-2xl"
          style={{ color: "#FF5851", fontWeight: 600 }}
        >
          Kuesioner Skripsi
        </h1>
        <p className="text-center font-bold mt-2 text-gray-500">
          Muhammad Raharditya Athafitra
          <br />
          Administrasi Negara
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
                selected={PE}
                handleItem={handleItem}
              />
            )}
            {pos === 3 && (
              <Form
                data={pernyataan[1]}
                selected={EE}
                handleItem={handleItem}
              />
            )}
            {pos === 4 && (
              <Form
                data={pernyataan[2]}
                selected={SI}
                handleItem={handleItem}
              />
            )}
            {pos === 5 && (
              <Form
                data={pernyataan[3]}
                selected={FC}
                handleItem={handleItem}
              />
            )}
            {pos === 6 && (
              <Form
                data={pernyataan[4]}
                selected={PR}
                handleItem={handleItem}
              />
            )}
            {pos === 7 && (
              <Form
                data={pernyataan[5]}
                selected={AT}
                handleItem={handleItem}
              />
            )}
            {pos === 8 && (
              <Form
                data={pernyataan[6]}
                selected={BI}
                handleItem={handleItem}
              />
            )}
          </>
        )}

        {successSubmit === false ? (
          hasSubmitted === false ? (
            <div
              className={`flex items-center justify-between ${
                pos === 0 || pos === 1 ? "" : "mt-8"
              } px-8 py-6`}
            >
              {/* <div className={`flex items-center justify-between mt-8 px-8 py-6`}> */}
              <button
                className={`py-2 px-6 rounded-lg border border-gray-400 shadow-lg focus:shadow-sm transition duration-150 font-bold ${
                  pos === 0 ? "opacity-50" : ""
                }`}
                disabled={pos === 0}
                onClick={handlePrev}
              >
                Kembali
              </button>
              {pos === 8 ? (
                <button
                  className={`border border-gray-400 shadow-lg focus:shadow-sm transition-all duration-150 ease-in-out font-bold ${
                    submitLoading
                      ? "py-2 px-2 rounded-full"
                      : "py-2 px-6 rounded-lg"
                  }`}
                  onClick={handleSubmit}
                  disabled={submitLoading}
                >
                  {submitLoading ? (
                    <Loader
                      type="TailSpin"
                      color="#393e46"
                      width={25}
                      height={25}
                    />
                  ) : (
                    "Kirim"
                  )}
                </button>
              ) : (
                <button
                  className="py-2 px-6 rounded-lg border border-gray-400 shadow-lg focus:shadow-sm transition duration-150 font-bold "
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
          successSubmit || hasSubmitted || pos === 0 ? "hidden" : ""
        }`}
      >
        <div className="h-4 border w-3/5 mx-auto border-gray-300 shadow-lg rounded-full bg-white mt-10">
          <div
            className={`h-full bg-green-500 rounded-full transition-all duration-150 ${
              pos === 1
                ? "progress-1"
                : pos === 2
                ? "progress-2"
                : pos === 3
                ? "progress-3"
                : pos === 4
                ? "progress-4"
                : pos === 5
                ? "progress-5"
                : pos === 6
                ? "progress-6"
                : pos === 7
                ? "progress-7"
                : pos === 8
                ? "progress-8"
                : ""
            }`}
          ></div>
        </div>
        <p className="text-center text-sm mt-2">Halaman {pos} dari 8</p>
      </div>
    </div>
  );
}
