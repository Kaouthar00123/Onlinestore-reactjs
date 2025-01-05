import React from "react";
import AppLayout from "./AppLayout";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function FirstPageLayout() {
  return (
    <AppLayout>
      <NavBar />
      <Outlet />
    </AppLayout>
  );
}
