import React from "react";

export default function AppLayout(props) {
  return (
    <div className="font-sans w-full h-full p-[2%] dark:bg-black">
      <div className="mx-[5%]">{props.children}</div>
    </div>
  );
}
