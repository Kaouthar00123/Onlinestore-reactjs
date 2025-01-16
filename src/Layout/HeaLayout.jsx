import React from "react";
import AppLayout from "./AppLayout";
import { Breadcrumb } from "flowbite-react";
import { Outlet, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function HeaLayout() {
  let location = useLocation();
  var pages = location.pathname.toString().replace(/%20/g, " ").split("/");
  let firstroot = pages
    .slice(1, 2)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1));
  pages = pages
    .slice(2, pages.length)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1));

  return (
    <AppLayout>
      <div className="mb-5">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            <Link to="/">{firstroot == "/" ? "Home" : firstroot}</Link>
          </Breadcrumb.Item>
          {pages.map((e) => (
            <Breadcrumb.Item href="#">{e}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <Outlet />
    </AppLayout>
  );
}
