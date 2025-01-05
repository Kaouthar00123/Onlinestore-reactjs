import React from "react";
import CheckoutForm from "../components/CheckoutPage/CheckoutForm";
import OrderSummary from "../components/ShoppingCardsPage/OrderSummary";

export default function Checkout() {
  return (
    <div className="p-5 rounded-lg flex flex-row gap-[2%] justify-between bg-gray-50 border border-gray-200">
      {/* Form Checkout customer information */}
      <CheckoutForm />
      {/* Order summary */}
      <div className="w-1/3 bg-gray-100">
        <OrderSummary />
      </div>
    </div>
  );
}
