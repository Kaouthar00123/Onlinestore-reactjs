import React, { useEffect, useState } from "react";
import SearchComponent from "../components/sharedComponents/SearchComponent";
import SectionShopping from "../components/ShoppingPage/SectionShopping";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "flowbite-react";
import ThemeContext from "..";
import { useContext } from "react";

// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
//   HiViewBoards,
//   HiCamera,
//   HiChip,
// } from "react-icons/hi";

import axios from "axios";
import CarousselImages from "../components/sharedComponents/CarousselImages";

const listcategories = [
  {
    name: "Laptops et ses accesoires",
    id: 1,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M956.9 845.1 896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608 8.1-37h150.3l8.1 37H428.7zm224 0-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z" />
      </svg>
    ),
  },
  {
    name: "Phones et ses accesoires",
    id: 2,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
      </svg>
    ),
  },
  {
    name: "Cameras et Headphones et Watches",
    id: 3,
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
      </svg>
    ),
  },
];
const apiUrl = "http://localhost:4000/products";
const notifurl = "http://localhost:4002/notification";
const imagepresnttaion = [
  {
    src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1648104063913-9bd7d11af6cb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1681566678032-36c85408ad09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1617194280586-97ececece2f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1685320198649-781e83a61de4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "",
  // },
  // {
  //   src: "https://media.istockphoto.com/id/1204894072/photo/toolkit-tools-on-wall.jpg?s=1024x1024&w=is&k=20&c=z9o4vNV9cs5ezOA1T0k2yq21ZQauhD07UXBBIPfoBY0=",
  //   alt: "",
  // },
  // {
  //   src: "https://media.istockphoto.com/id/502377899/photo/landscaping-tools-with-room-for-copy.jpg?s=1024x1024&w=is&k=20&c=w7zjBpKoYumxNuM1nN_vZMefClI77mLwS1-5AbXcRYU=",
  //   alt: "j1",
  // },
  // {
  //   src: "https://media.istockphoto.com/id/1155881063/photo/taking-the-needed-tool-to-begin-repairs.jpg?s=1024x1024&w=is&k=20&c=HvP0LD-xccdYeqUK96rgZU7X8yjNt8XcVT56yG2QIqQ=",
  //   alt: "j2",
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1677362887440-f368093def81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "c1",
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1677700375016-efecc99bc526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "o1",
  // },
  // {
  //   src: "  https://images.unsplash.com/photo-1603227685935-3f66d0f35440?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "o2",
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1677009834523-367c2e9b281c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "o3",
  // },
];

export default function Home() {
  const baseUrl = useContext(ThemeContext);
  const [products, setproducts] = useState(null);
  const [notifications, setNotifications] = useState(null);
  var location = useLocation();
  console.log("location.pathname.toString(): ", location.pathname.toString());
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("response.data: ", response.data);
        setproducts(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });

    // Set time laps to listen to notif
    setTimeout(() => {
      axios
        .get(notifurl)
        .then((response) => {
          console.log("response.data: ", response.data);
          response.data.map((notif) =>
            setNotifications((prev) => {
              return [...prev, notif];
            })
          );
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }, 5000);
  }, []);

  return (
    <main
      id="Shopping"
      className="rounded-md shadow-sm w-[100%] h-[100%] mt-[2%] font-sans"
    >
      <header className="h-[3rem] my-[2%]">
        <SearchComponent />
      </header>
      <div id="content">
        <section id="presnttaion" className="w-full flex gap-5">
          <div
            id="sidebarmenu"
            className="w-[30%] h-fit bg-[#ffffff00] font-serif border border-gray-100 rounded-md"
          >
            <div
              id="title-category"
              className="bg-gray-50 mb-3 text-lg font-medium px-2 py-1 flex justify-between w-full align-middle items-center"
            >
              <div className="flex gap-3 justify-start align-middle items-center w-[80%] text-gray-700">
                <span className="w-[1/5]">
                  <svg
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
                  </svg>
                </span>
                <span className="w-[4/5]">Categories</span>
              </div>
            </div>
            <ul className="flex flex-col gap-2 text-lg text-black px-2 bg-white">
              {listcategories.map((category) => (
                <li className="px-2 py-1 hover:bg-gray-100 border-b border-b-gray-200">
                  <Link
                    to={
                      location.pathname.toString() +
                      "home/category-products/" +
                      category.name
                    }
                  >
                    <div className="flex justify-between w-full align-middle items-center">
                      <div className="flex gap-3 justify-start align-middle items-center w-[80%] text-gray-700">
                        {/* <span className="w-[1/5] text-[20px] text-gray-600">
                          {category.icon}
                        </span> */}
                        <span className="text-start">{category.name}</span>
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <CarousselImages
            images={imagepresnttaion}
            className="rounded-md shadow-md w-full h-full object-cover"
          />
        </section>

        <div id="subcontent">
          {/* New Arrivals Product */}
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
          />{" "}
          {/* </>
          )} */}
        </div>
      </div>
      {/* //Notification section */}
      {!notifications ? (
        <></>
      ) : (
        <section className="flex flex-col w-full h-[100vh]  z-[1000000]">
          <ul className="fixed top-0 bottom-0 right-0 flex flex-col justify-end gap-5">
            {console.log("notifications: ", notifications)}
            <AnimatePresence initial={false} mode="popLayout">
              {notifications.map((notif) => (
                <motion.li
                  className="p-3 text-sm w-[300px] bg-green-100 border border-gray-100 rounded-lg flex flex-col gap-3"
                  key={notif.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div id="header" className="flex justify-between">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {notif.title}
                    </h4>
                    <button
                      onClick={() =>
                        setNotifications((prev) => {
                          return prev.splice(
                            prev.findIndex((i) => i === notif.id),
                            1
                          );
                        })
                      }
                    >
                      <svg
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 1024 1024"
                      >
                        <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0z" />
                      </svg>
                    </button>
                  </div>
                  <hr />
                  <p className="text-sm text-gray-700">{notif.content}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </section>
      )}
    </main>
  );
}
