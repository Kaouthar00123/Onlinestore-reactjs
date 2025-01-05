import React from "react";

const ordersummary = {
  Subtotal: 2427.0,
  "Tax collected": 73.4,
  Shipping: 16.5,
  "Code promo": -110.0,
  total: function () {
    return (
      this.Subtotal + this["Tax collected"] + this.Shipping + this["Code promo"]
    );
  },
};

export default function OrderSummary() {
  return (
    <div
      id="orderSummary"
      className="rounded-lg shadow-md p-[5%] h-fit sticky top-[12%] z-100 my-[2%]"
    >
      <div className="flex justify-between items-center align-middle mb-2">
        <h2 className="">Order summary</h2>
        <span className="text-base text-gray-500 underline cursor-pointer">
          Edit
        </span>
      </div>
      <hr className="mb-3" />
      <div id="ordercontent" className="mt-2 flex flex-col gap-5">
        <div className="flex flex-col gap-2 my-3 font-sans text-base">
          {Object.entries(ordersummary).map(([key, value]) => {
            if (key !== "total") {
              return (
                <div className="flex justify-between">
                  <span className="text-gray-500">{key}:</span>
                  <span className="text-black font-medium">${value}</span>
                </div>
              );
            }
          })}
        </div>
        <hr />
        <div id="total" className="flex justify-between">
          <span className="text-lg text-gray-500 font-semibold">
            Estimated total:
          </span>
          <span className="text-lg text-black font-semibold">
            ${ordersummary.total()}
          </span>
        </div>
      </div>
    </div>
  );
}
