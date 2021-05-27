import React from "react";

export default function Item(props) {
  // console.log(props.data);
  // console.log(props.data.itemId, props.selected[props.data.itemId]);

  return (
    <div
      className={`item-container pb-8 border-b ${props.index !== 0 && "pt-8"}`}
    >
      <p className="mb-4 font-bold">{props.data.question}</p>
      <div className="grid grid-cols-3 items-end justify-between">
        <small className="text-gray-500">
          Sangat
          <br />
          tidak setuju
        </small>
        <small className="text-gray-500 text-center">Netral</small>
        <small className="text-gray-500 text-right">
          Sangat
          <br /> setuju
        </small>
      </div>
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 1, 5);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 1, 1);
            }
          }}
          className={`bg-red-300 w-10 h-10 border rounded-lg transition duration-150 focus:outline-none ${
            props.selected[props.data.itemId] === 1
              ? "border-4 border-black font-bold"
              : props.selected[props.data.itemId] !== undefined
              ? "opacity-50"
              : ""
          }`}
        >
          1
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 2, 4);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 2, 2);
            }
          }}
          className={`bg-red-200 w-10 h-10 border rounded-lg transition duration-150 focus:outline-none ${
            props.selected[props.data.itemId] === 2
              ? "border-4 border-black font-bold"
              : props.selected[props.data.itemId] !== undefined
              ? "opacity-50"
              : ""
          }`}
        >
          2
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 3, 3);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 3, 3);
            }
          }}
          className={`bg-gray-200 w-10 h-10 border rounded-lg transition duration-150 focus:outline-none ${
            props.selected[props.data.itemId] === 3
              ? "border-4 border-black bg-gray-300 font-bold"
              : props.selected[props.data.itemId] !== undefined
              ? "opacity-50"
              : ""
          }`}
        >
          3
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 4, 2);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 4, 4);
            }
          }}
          className={`bg-green-200 w-10 h-10 border rounded-lg transition duration-150 focus:outline-none ${
            props.selected[props.data.itemId] === 4
              ? "border-4 border-black font-bold"
              : props.selected[props.data.itemId] !== undefined
              ? "opacity-50"
              : ""
          }`}
        >
          4
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 5, 1);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 5, 5);
            }
          }}
          className={`bg-green-300 w-10 h-10 border rounded-lg transition duration-150 focus:outline-none ${
            props.selected[props.data.itemId] === 5
              ? "border-4 border-black font-bold"
              : props.selected[props.data.itemId] !== undefined
              ? "opacity-50"
              : ""
          }`}
        >
          5
        </button>
      </div>
    </div>
  );
}
