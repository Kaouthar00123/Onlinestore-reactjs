import React, { useContext, useEffect, useState } from "react";
import ShoppingCartItem from "../components/ShoppingCardsPage/ShoppingCartItem";
import OrderSummary from "../components/ShoppingCardsPage/OrderSummary";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductPlaceholder from "../components/ProductDetails/ProductPlaceholder";

import ThemeContext from "..";

const apiUrl = "http://localhost:4001/shoppingcart";
const deleteelmurl = "http://localhost:4001/shoppingcart";

async function deleteelement(url, id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => {
      console.log(
        `Succes lorsque delete d'elment ${id} dans requete ${url}, status: ${response.status}`
      );
      return response;
    })
    .catch((error) => {
      console.log(
        `err lorsque delete ute d'elment ${id} dans requete ${url}, et errer: ${error}`
      );
      return "errer";
    });
}

export default function ShoppingCart() {
  const path = useContext(ThemeContext);
  const [shoppinglist, setshoppinglist] = useState(null);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("response.data: ", response.data);
        setshoppinglist(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

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
            {!shoppinglist ? (
              <ProductPlaceholder />
            ) : (
              shoppinglist.map((product) => (
                <>
                  <ShoppingCartItem
                    product={product}
                    handeldelete={(id) => {
                      deleteelement(deleteelmurl, id);
                      setshoppinglist((prev) => {
                        return prev.filter((e) => {
                          return e.id !== id;
                        });
                      });
                    }}
                  />
                  <hr className="mb-1" />
                </>
              ))
            )}
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
