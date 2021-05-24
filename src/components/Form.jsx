import React from "react";
import Item from "./Item";

export default function Form(props) {
  return (
    <div className="rounded-lg text-gray-900">
      <div
        className={`h-20 rounded-t-xl flex items-center justify-center ${props.data.color}`}
      >
        <h2 className="text-lg font-bold text-white">{props.data.titleInd}</h2>
      </div>
      <form className="px-6 py-6 pb-0">
        {props.data.items.map((item, idx) => (
          <Item
            key={idx}
            data={item}
            index={idx}
            handleItem={props.handleItem}
            selected={props.selected}
            id={props.data.id}
          />
        ))}
      </form>
    </div>
  );
}
