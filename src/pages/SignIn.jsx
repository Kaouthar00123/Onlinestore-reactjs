import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
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

export default function SignIn() {
  const [showpassword, setshowpassword] = useState(false);
  const [infosignin, setinfosignin] = useState({
    Email: "",
    Password: "",
    SavePassword: false,
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
            <h2 className="text-2xl">Welcome back</h2>
            <h5 className="text-gray-400 text-base flex justify-between">
              Don't have an account ?
              <span className="text-gray-500 underline">
                <Link to="/sign/up">Create an account</Link>
              </span>
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
                placeholder="Email"
                required
                value={infosignin.Email}
                onChange={(e) =>
                  setinfosignin((previousState) => ({
                    ...previousState,
                    Email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="relative">
              <div className="relative w-full">
                <TextInput
                  autocomplete="off"
                  sizing="lg"
                  className="w-full"
                  id="password1"
                  type={showpassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={infosignin.Password}
                  onChange={(e) =>
                    setinfosignin((previousState) => ({
                      ...previousState,
                      Password: e.target.value,
                    }))
                  }
                />
                <div
                  className="absolute right-0 top-0 bottom-0 flex align-middle items-center justify-center mx-2"
                  onClick={() => setshowpassword(!showpassword)}
                >
                  {/* hiden eye icon */}
                  <svg
                    className={showpassword ? "hidden" : "flex"}
                    width="1.2em"
                    height="1.2em"
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z" />
                    <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z" />
                  </svg>
                  {/* eye icon */}
                  <svg
                    className={showpassword ? "flex" : "hidden"}
                    width="1.2em"
                    height="1.2em"
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              id="boxes"
              className="flex justify-between items-center align-middle text-base text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  onChange={(e) =>
                    setinfosignin((previousState) => ({
                      ...previousState,
                      SavePassword: e.target.checked,
                    }))
                  }
                />
                <Label htmlFor="remember">Remember for 30 days</Label>
              </div>
              <span className="text-gray-800 underline">
                <Link to="/sign/pwd-recovery">Forgot password?</Link>
              </span>
            </div>
            <Button
              type="submit"
              className="bg-black text-gray-50"
              onClick={(e) => {
                console.log("infos", infosignin);
                // e.preventDefault();
              }}
            >
              Sign In
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
