import React from "react";
import { Breadcrumb } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { HiHome } from "react-icons/hi";

export default function SignInLayout() {
  let location = useLocation();
  var pages = location.pathname.toString().split("/");
  pages = pages
    .slice(1, pages.length)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1));

  return (
    <div>
      <header className="flex flex-col gap-5">
        <h2>SignInLayout</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          {pages.map((e) => (
            <Breadcrumb.Item href="#">{e}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </header>

      <Outlet />
    </div>
  );
}
