import React from "react";

export default function Item(props) {
  // console.log(props.data);
  // console.log(props.data.itemId, props.selected[props.data.itemId]);

  return (
    <div className={`pb-8 border-b ${props.index !== 0 && "pt-8"}`}>
      <p className="mb-4">{props.data.question}</p>
      <div className="flex items-center justify-between">
        <small className="text-gray-500">
          Sangat
          <br />
          tidak setuju
        </small>
        <small className="text-gray-500">Netral</small>
        <small className="text-gray-500 text-right">
          Sangat
          <br /> setuju
        </small>
      </div>
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 5);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 1);
            }
          }}
          className={`bg-red-400 w-10 h-10 border rounded-lg ${
            props.selected[props.data.itemId] === 1 &&
            "border-2 border-yellow-500"
          }`}
        >
          1
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 4);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 2);
            }
          }}
          className={`bg-red-300 w-10 h-10 border rounded-lg ${
            props.selected[props.data.itemId] === 2 &&
            "border-2 border-yellow-500"
          }`}
        >
          2
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 3);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 3);
            }
          }}
          className={`bg-gray-200 w-10 h-10 border rounded-lg ${
            props.selected[props.data.itemId] === 3 &&
            "border-2 border-yellow-500"
          }`}
        >
          3
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 2);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 4);
            }
          }}
          className={`bg-green-200 w-10 h-10 border rounded-lg ${
            props.selected[props.data.id] === 4 && "border-2 border-yellow-500"
          }`}
        >
          4
        </button>
        <button
          onClick={(event) => {
            if (props.data.isNegative) {
              props.handleItem(event, props.id, props.data.itemId, 1);
            } else {
              props.handleItem(event, props.id, props.data.itemId, 5);
            }
          }}
          className={`bg-green-300 w-10 h-10 border rounded-lg ${
            props.selected[props.data.id] === 5 && "border-2 border-yellow-500"
          }`}
        >
          5
        </button>
      </div>
    </div>
  );
}
