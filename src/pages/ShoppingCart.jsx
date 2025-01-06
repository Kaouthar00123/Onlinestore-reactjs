import React, { useState } from "react";
import ShoppingCartItem from "../components/ShoppingCardsPage/ShoppingCartItem";
import OrderSummary from "../components/ShoppingCardsPage/OrderSummary";
import { Button } from "flowbite-react";
import { path } from "..";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function ShoppingCart() {
  const [shoppinglist, setshoppinglist] = useState(products);
  return (
    <div className="flex flex-col">
      <h2 className="text-center m-[2%] text-2xl font-semibold">
        Shopping Cart
      </h2>
      {/* Shoping Cart list in large and small mode */}
      <div id="shooping-cart-list" className="flex gap-10">
        <div id="list" className="flex flex-col w-[60%] mx-auto">
          <div
            id="headerlistproduct"
            className="flex flex-col gap-3 max-[1000px]:hidden"
          >
            <div className="grid grid-cols-12 gap-5 text-base text-gray-500">
              <span className="col-span-5">Product</span>
              <span className="col-span-2">Price</span>
              <span className="col-span-2">Quantity</span>
              <span className="col-span-2">Total</span>
              <span className="col-span-1">Delete</span>
            </div>
            <hr className="mb-3" />
          </div>
          <ul role="list" className="flex flex-col gap-5">
            {shoppinglist.map((product) => (
              <>
                <ShoppingCartItem
                  product={product}
                  handeldelete={(id) =>
                    setshoppinglist((prev) => {
                      return prev.filter((e) => {
                        return e.id !== id;
                      });
                    })
                  }
                />
                <hr className="mb-1" />
              </>
            ))}
          </ul>
        </div>
        <div
          id="ordersummary"
          className="w-[35%] mx-[2%] flex flex-col gap-5 justify-center align-middle items-center"
        >
          <OrderSummary className="bg-gray-50" />
          <Button onClick={(e) => e.preventDefault()}>
            <Link to={path + "/checkout"}>Proceed to checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
