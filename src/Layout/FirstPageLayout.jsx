import React from "react";
import NavBar from "./NavBar";
import AppLayout from "./AppLayout";
import { Outlet } from "react-router-dom";

export default function FirstPageLayout() {
  return (
    <AppLayout>
      <NavBar />
      <Outlet />
    </AppLayout>
  );
}
