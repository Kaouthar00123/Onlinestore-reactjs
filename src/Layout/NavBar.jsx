import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgDarkMode } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import ShoppingCart from "../components/ShoppingCardsPage/ShppingCart";
import { NavLink } from "react-router-dom";
import ThemeContext from "..";

const menulist = [
  ["Home", "/"],
  ["ShoppingCart", "/shoppingcart"],
  ["Contact", "/contact"],
];

export default function NavBar() {
  const path = useContext(ThemeContext);
  const [MenueShowing, setMenueShowing] = useState(false);
  const [theme, setTheme] = useState(null);
  const [OpenShoppingCart, setOpenShoppingCart] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="sticky top-0 mb-[2%] bg-white flex justify-between items-center rounded-full p-4 z-[50] shadow-[0_0.5rem_2rem_-0.25rem_hsla(216,9%,44%,.1)]">
      <div id="logo" className="font-semibold text-xl">
        <a href="">BrandLogo</a>
      </div>
      <ul
        id="menu"
        className="flex justify-between gap-5 visible max-[500px]:hidden"
      >
        {menulist.map((e) => (
          <li>
            <NavLink
              to={path + e[1]}
              className={
                "py-2 hover:border-b-2 hover:border-black "
                // + (isActive ? "link-active" : "")
              }
            >
              {e[0]}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        id="header-options"
        className="flex flex-row visible max-[500px]:hidden"
      >
        {/* mode icon={faArrowsRotate} */}
        <button className="mx-2">
          <CgDarkMode
            className="icon-header"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </button>
        {/* <button className="mx-2">
          <FiShoppingCart
            className="icon-header"
            onClick={() => setOpenShoppingCart(true)}
          />
        </button> */}
        <ShoppingCart init={OpenShoppingCart} open={setOpenShoppingCart} />
        <button className="mx-2">
          <IoIosSearch className="icon-header" />
        </button>

        {/* compte */}
        {/* recherche */}
      </div>
      <div
        id="shortmenu"
        className="hidden max-[500px]:flex max-[500px]:justify-end max-[500px]:w-full "
      >
        <button
          className="hidden max-[500px]:flex"
          onClick={() => setMenueShowing(!MenueShowing)}
        >
          <MdMenu className="text-[25px]" />
        </button>
        <ul
          className={`mt-0 w-full absolute top-[65px] left-0 bg-gray-200 min-[500px]:hidden ${
            MenueShowing ? "flex flex-col" : "hidden"
          } transition-all`}
        >
          {menulist.map((e) => (
            <li className="w-full text-center mb-2">
              <NavLink
                to={path + e[1]}
                className={
                  "hover:border-b hover:border-black "
                  // +(Curage === e[0] ? "link-active" : "")
                }
              >
                {e[0]}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
