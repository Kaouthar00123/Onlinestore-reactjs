import React from "react";
import AppLayout from "../../Layout/AppLayout";
import { Outlet } from "react-router-dom";

export default function SignLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
