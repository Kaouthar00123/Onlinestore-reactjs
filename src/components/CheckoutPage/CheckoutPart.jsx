import React from "react";

export default function CheckoutPart(props) {
  return (
    <div className="w-full">
      <div id="title" className="flex gap-3 my-3">
        <span className="w-[30px] h-[30px] flex justify-center align-middle items-center rounded-full border-none bg-gray-200 text-gray-950">
          {props.numEtape}
        </span>
        <h3>{props.title}</h3>
      </div>
      <div className="p-2 text-gray-800 w-full">{props.children}</div>
    </div>
  );
}
