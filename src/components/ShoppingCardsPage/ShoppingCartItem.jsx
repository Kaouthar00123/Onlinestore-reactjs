import React, { useState } from "react";

export default function ShoppingCartItem(props) {
  const product = props.product;
  const [quantities, setquantities] = useState(product.quantity);
  return (
    <li
      key={product.id}
      className="grid grid-cols-12 gap-5 text-base text-gray-500 items-center align-middle justify-center"
    >
      <div id="Product" className="col-span-5 flex gap-3">
        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="size-full object-cover"
          />
        </div>
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.name}</a>
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
      </div>
      <div id="Price" className="col-span-2">
        <span className="">${product.price}</span>
      </div>
      <div id="Quantity" className="col-span-2 w-fit">
        <div
          id="qutn"
          className="rounded-md border-gray-300 border text-gray-800"
        >
          <button
            className="bg-white text-gray-400 px-2 py-[0.25rem] rounded-tl-md rounded-bl-md hover:bg-gray-100"
            onClick={() => {
              if (quantities > 1) setquantities(quantities - 1);
            }}
          >
            -
          </button>
          <span className="bg-white text-gray-400 px-2 py-[0.25rem]">
            {quantities}
          </span>
          <button
            className="bg-white text-gray-400 px-2 py-[0.25rem] rounded-tr-md rounded-br-md hover:bg-gray-300"
            onClick={() => {
              if (quantities < 10) setquantities(quantities + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div id="Total" className="col-span-2">
        <span className="">${product.price * quantities}</span>
      </div>
      <div
        id="Delete"
        className="col-span-1"
        onClick={() => props.handeldelete(product.id)}
      >
        <svg
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 1024 1024"
        >
          <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0z" />
        </svg>
      </div>
      {/* <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="size-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className="ml-4">{product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div
            id="qutn"
            className="rounded-md border-gray-300 border text-gray-800"
          >
            <button
              className="bg-white text-gray-400 px-3 py-[0.35rem] rounded-tl-md rounded-bl-md hover:bg-gray-100"
              onClick={() => {
                if (quantities > 1) setquantities(quantities - 1);
              }}
            >
              -
            </button>
            <span className="bg-white text-gray-400 px-3 py-[0.35rem]">
              Qty: {quantities}
            </span>
            <button
              className="bg-white text-gray-400 px-3 py-[0.35rem] rounded-tr-md rounded-br-md hover:bg-gray-300"
              onClick={() => {
                if (quantities < 10) setquantities(quantities + 1);
              }}
            >
              +
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div> */}
    </li>
  );
}
