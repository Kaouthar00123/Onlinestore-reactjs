import React, { useState } from "react";

export default function ListMenu(props) {
  const item = props.item;
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        className="btn-filter flex justify-center items-center gap-2"
        onClick={() => setisOpen(!isOpen)}
      >
        {item.name}
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        className={`origin-top-right absolute mt-2 w-56 z-10 p-2 space-y-6 shadow-md rounded-md bg-white ${
          isOpen ? "" : "hidden"
        }`}
      >
        {item.options.map((option, optionIdx) => (
          <div key={option.value} className="flex gap-3">
            <div className="flex h-5 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  defaultValue={option.value}
                  id={`filter-mobile-${item.id}-${optionIdx}`}
                  name={`${item.id}[]`}
                  type="checkbox"
                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-300 checked:bg-indigo-300 indeterminate:border-indigo-300 indeterminate:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-[:checked]:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor={`filter-mobile-${item.id}-${optionIdx}`}
              className="min-w-0 flex-1 text-gray-500"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
