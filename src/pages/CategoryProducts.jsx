import React from "react";
import Card from "../components/ShoppingPage/Card";
import Filter from "../components/ProductDetails/Filter";
import SearchComponent from "../components/sharedComponents/SearchComponent";

const products = [
  {
    id: 1,
    "img-url": "https://flowbite.com/docs/images/products/apple-watch.png",
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "500$",
    rate: 3,
  },
  {
    id: 2,
    "img-url":
      "https://cartzilla-html.createx.studio/assets/img/shop/electronics/product/gallery/01.png",
    name: "Phone RealMe, New version, with solid concption and performace",
    price: "500$",
    rate: 4,
  },
  {
    id: 3,
    "img-url":
      "https://cartzilla-html.createx.studio/assets/img/shop/electronics/01.png",
    name: "HeaSet for Virtual experience",
    price: "500$",
    rate: 2,
  },
  {
    id: 1,
    "img-url":
      "https://cartzilla-html.createx.studio/assets/img/shop/electronics/03.png",
    name: "Smart watch, New One",
    price: "500$",
    rate: 1,
  },
  {
    id: 1,
    "img-url":
      "https://cartzilla-html.createx.studio/assets/img/shop/electronics/07.png",
    name: "Gamer Laptop ISSUS",
    price: "500$",
    rate: 5,
  },
  {
    id: 1,
    "img-url":
      "https://cartzilla-html.createx.studio/assets/img/shop/electronics/11.png",
    name: "VRB01 Camera Nikon Max",
    price: "500$",
    rate: 5,
  },
  {
    id: 1,
    "img-url":
      "https://cartzilla-html.createx.studio/assets/img/shop/electronics/06.png",
    name: "Air pod Woow",
    price: "500$",
    rate: 5,
  },
];

export default function CategoryProducts() {
  return (
    <main id="Shopping" className="w-[100%] h-[100%] mt-[2%]">
      {/* <h2 className="text-center text-2xl font-semibold m-5">
        Shopping section
      </h2> */}
      <header className="h-[3rem] my-[2%]">
        <SearchComponent />
      </header>
      <section></section>
      <div id="shopping-content">
        <Filter />
        <div
          id="cards"
          className="mt-[5%] mx-auto grid max-[500px]:grid-cols-1 grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6 md:grid-cols-3 md:gap-4"
        >
          {products.map((product) => (
            <Card
              id={product.id}
              img-url={product["img-url"]}
              name={product.name}
              rate={product.rate}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
