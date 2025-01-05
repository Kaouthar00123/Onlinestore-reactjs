import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // You can pass formData as a fetch body directly:
  fetch("/some-api", { method: form.method, body: formData });

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

export default function ForgetPassword() {
  const [infostoreset, setinfostoreset] = useState({
    Email: "",
  });
  return (
    <div className="flex gap-5">
      {/* Account infos */}
      <div className="w-[45%] flex flex-col gap-7">
        {/* Logo part, propoerties: max-w-[50px] max-h-[50px] min-w-[20px] min-h-[20px]*/}
        <div className="flex align-middle items-center gap-2">
          <svg
            width="2em"
            height="2em"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
            <path d="M9.5 17H6V3H4" />
            <path d="m6 5 14 1-.615 4.302M12.5 13H6m11.8 7.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411L17.8 20.817z" />
          </svg>
          <span className="text-xl font-semibold text-black">LogoSpace</span>
        </div>
        {/* Account part */}
        <div className="flex flex-col gap-6">
          <div id="form-header" className="flex flex-col gap-3 max-w-md">
            <h2 className="text-2xl flex justify-between">
              Forgot password?
              <span className="flex gap-2 justify-center items-center align-middle text-base text-gray-600 hover:underline">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M485.6 249.9 198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z" />
                </svg>
                <Link to="/sign/in">Back to Sign In</Link>
              </span>
            </h2>
            <h5 className="text-gray-400 text-base flex justify-between">
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password
            </h5>
          </div>
          <form
            className="flex max-w-md w-full flex-col gap-4"
            autocomplete="on"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <TextInput
                sizing="lg"
                id="email1"
                type="email"
                placeholder="Email address"
                required
                value={infostoreset.Email}
                onChange={(e) =>
                  setinfostoreset((previousState) => ({
                    ...previousState,
                    Email: e.target.value,
                  }))
                }
              />
            </div>
            <Button
              type="submit"
              className="bg-black text-gray-50"
              onClick={(e) => {
                console.log("infos", infostoreset);
                // e.preventDefault();
              }}
            >
              Reset password
            </Button>
          </form>
          <div id="form-footer" className="flex flex-col gap-3">
            <div className="text-gray-700 text-sm font-medium underline">
              <Link to="">Need A help ?</Link>
            </div>
            <div className="text-gray-400 text-sm">
              © All rights reserved. Made by{" "}
              <span className="text-black font-semibold underline">
                Kaouthar Esh
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Promotion part */}
      <div className="w-[55%] p-4 bg-gradient-to-r from-blue-50 to-blue-300">
        <img
          className="w-full object-cover"
          src="https://cartzilla-html.createx.studio/assets/img/account/cover.png"
          alt="SIgn Up image"
        />
      </div>
    </div>
  );
}
