import React from "react";
import Card from "../components/ShoppingPage/Card";
import SearchComponent from "../components/sharedComponents/SearchComponent";
import SectionShopping from "../components/ShoppingPage/SectionShopping";
import { Link } from "react-router-dom";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiCamera,
  HiChip,
} from "react-icons/hi";

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

const listcategories = [
  {
    name: "Laptop & Computer",
    id: 1,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M956.9 845.1 896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608 8.1-37h150.3l8.1 37H428.7zm224 0-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z" />
      </svg>
    ),
  },
  {
    name: "Phone & Computer",
    id: 2,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
      </svg>
    ),
  },
  {
    name: "Camera & Computer",
    id: 3,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
      </svg>
    ),
  },
  {
    name: "Accesorie & Computer",
    id: 4,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z" />
      </svg>
    ),
  },
  {
    name: "Air prod & Computer",
    id: 5,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z" />
      </svg>
    ),
  },
  {
    name: "Watch & Computer",
    id: 6,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z" />
      </svg>
    ),
  },
  {
    name: "... & Computer",
    id: 7,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z" />
      </svg>
    ),
  },
];
export default function Home() {
  return (
    <main id="Shopping" className="w-[100%] h-[100%] mt-[2%] font-sans">
      {/* <h2 className="text-center text-2xl font-semibold m-5">
        Shopping section
      </h2> */}
      <header className="h-[3rem] my-[2%]">
        <SearchComponent />
      </header>
      <div id="content" className="flex gap-7">
        <div id="sidebarmenu">
          <Sidebar aria-label="Sidebar with logo branding example">
            <h3 className="text-xl font-medium my-5">Categories</h3>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {listcategories.map((category) => (
                  <Link to={"/firstpages/categoryproducts/" + category.id}>
                    <Sidebar.Item>
                      <div className="flex justify-between w-full align-middle items-center">
                        <div className="flex gap-3 justify-start align-middle items-center w-[80%] text-sm text-gray-700">
                          {category.icon}
                          {category.name}
                        </div>
                        <div className="w-[20%] flex justify-end">
                          <svg
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 1024 1024"
                          >
                            <path d="M765.7 486.8 314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
                          </svg>
                        </div>
                      </div>
                    </Sidebar.Item>
                  </Link>
                ))}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div>
          {/* New Arrivals Section */}
          <SectionShopping
            id="new-arrivals-products"
            title="New Arrivals"
            products={products}
          />
          {/* Saison Trand Product */}
          <SectionShopping
            id="trend-products"
            title="Trending"
            products={products}
          />
        </div>
      </div>
    </main>
  );
}
