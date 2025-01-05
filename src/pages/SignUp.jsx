import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const features = [
  {
    text: "Subscribe to your favorite products",
    icon: (
      <svg width="1.4em" height="1.4em" fill="blue" viewBox="0 0 1024 1024">
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232 512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
      </svg>
    ),
  },
  {
    text: "View and manage your orders and wishlist",
    icon: (
      <svg width="1.4em" height="1.4em" fill="blue" viewBox="0 0 1024 1024">
        <path d="m924.8 625.7-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z" />
      </svg>
    ),
  },
  {
    text: "Receive exclusive offers and discounts",
    icon: (
      <svg width="1.4em" height="1.4em" fill="blue" viewBox="0 0 24 24">
        <path d="M10.054 2.094a3 3 0 0 1 3.892 0l1.348 1.149a1 1 0 0 0 .57.236l1.765.14a3 3 0 0 1 2.752 2.752l.14 1.766a1 1 0 0 0 .236.569l1.149 1.348a3 3 0 0 1 0 3.892l-1.149 1.348a1 1 0 0 0-.236.569l-.14 1.765a3 3 0 0 1-2.752 2.752l-1.766.14a1 1 0 0 0-.569.237l-1.348 1.148a3 3 0 0 1-3.892 0l-1.348-1.148a1 1 0 0 0-.569-.236l-1.765-.141a3 3 0 0 1-2.752-2.752l-.14-1.765a1 1 0 0 0-.237-.57l-1.148-1.348a3 3 0 0 1 0-3.891l1.148-1.348a1 1 0 0 0 .236-.57l.141-1.765A3 3 0 0 1 6.372 3.62l1.765-.14a1 1 0 0 0 .57-.236l1.347-1.149zm2.595 1.522a1 1 0 0 0-1.297 0l-1.348 1.15a3 3 0 0 1-1.708.706l-1.765.141a1 1 0 0 0-.917.917l-.141 1.766a3 3 0 0 1-.707 1.707l-1.15 1.348a1 1 0 0 0 0 1.297l1.15 1.348a3 3 0 0 1 .707 1.707l.14 1.766a1 1 0 0 0 .918.917l1.765.141a3 3 0 0 1 1.708.707l1.348 1.15a1 1 0 0 0 1.297 0l1.348-1.15a3 3 0 0 1 1.707-.707l1.765-.14a1 1 0 0 0 .918-.918l.14-1.766c.05-.629.298-1.226.708-1.707l1.149-1.348a1 1 0 0 0 0-1.297l-1.15-1.348a3 3 0 0 1-.706-1.707l-.141-1.766a1 1 0 0 0-.918-.917l-1.765-.14a3 3 0 0 1-1.707-.708l-1.348-1.149zm2.18 4.141 1.414 1.414-7.071 7.072-1.415-1.415 7.071-7.07zm-4.597 2.475a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.121zm3.536 5.657a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.12z" />
      </svg>
    ),
  },
  {
    text: "Subscribe to your favorite products",
    icon: (
      <svg width="1.4em" height="1.4em" fill="blue" viewBox="0 0 1024 1024">
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232 512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
      </svg>
    ),
  },
  {
    text: "View and manage your orders and wishlist",
    icon: (
      <svg width="1.4em" height="1.4em" fill="blue" viewBox="0 0 1024 1024">
        <path d="m924.8 625.7-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z" />
      </svg>
    ),
  },
  {
    text: "Receive exclusive offers and discounts",
    icon: (
      <svg width="1.4em" height="1.4em" fill="blue" viewBox="0 0 24 24">
        <path d="M10.054 2.094a3 3 0 0 1 3.892 0l1.348 1.149a1 1 0 0 0 .57.236l1.765.14a3 3 0 0 1 2.752 2.752l.14 1.766a1 1 0 0 0 .236.569l1.149 1.348a3 3 0 0 1 0 3.892l-1.149 1.348a1 1 0 0 0-.236.569l-.14 1.765a3 3 0 0 1-2.752 2.752l-1.766.14a1 1 0 0 0-.569.237l-1.348 1.148a3 3 0 0 1-3.892 0l-1.348-1.148a1 1 0 0 0-.569-.236l-1.765-.141a3 3 0 0 1-2.752-2.752l-.14-1.765a1 1 0 0 0-.237-.57l-1.148-1.348a3 3 0 0 1 0-3.891l1.148-1.348a1 1 0 0 0 .236-.57l.141-1.765A3 3 0 0 1 6.372 3.62l1.765-.14a1 1 0 0 0 .57-.236l1.347-1.149zm2.595 1.522a1 1 0 0 0-1.297 0l-1.348 1.15a3 3 0 0 1-1.708.706l-1.765.141a1 1 0 0 0-.917.917l-.141 1.766a3 3 0 0 1-.707 1.707l-1.15 1.348a1 1 0 0 0 0 1.297l1.15 1.348a3 3 0 0 1 .707 1.707l.14 1.766a1 1 0 0 0 .918.917l1.765.141a3 3 0 0 1 1.708.707l1.348 1.15a1 1 0 0 0 1.297 0l1.348-1.15a3 3 0 0 1 1.707-.707l1.765-.14a1 1 0 0 0 .918-.918l.14-1.766c.05-.629.298-1.226.708-1.707l1.149-1.348a1 1 0 0 0 0-1.297l-1.15-1.348a3 3 0 0 1-.706-1.707l-.141-1.766a1 1 0 0 0-.918-.917l-1.765-.14a3 3 0 0 1-1.707-.708l-1.348-1.149zm2.18 4.141 1.414 1.414-7.071 7.072-1.415-1.415 7.071-7.07zm-4.597 2.475a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.121zm3.536 5.657a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.12z" />
      </svg>
    ),
  },
];
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

export default function SignUp() {
  const [showpassword, setshowpassword] = useState(false);
  const [infosignup, setinfosignup] = useState({
    Email: "",
    Password: "",
    SavePassword: false,
    AcceptPrivacy: false,
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
          <div id="form-header" className="flex flex-col gap-3">
            <h2 className="text-2xl">Create an account</h2>
            <h5 className="text-gray-400 text-base">
              I already have an account{" "}
              <span className="text-gray-500 underline">
                <Link to="/sign/in">Sign in</Link>
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
              <Label className="mb-2 block" htmlFor="email1" value="Email" />
              <TextInput
                sizing="lg"
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
                value={infosignup.Email}
                onChange={(e) =>
                  setinfosignup((previousState) => ({
                    ...previousState,
                    Email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="relative">
              <Label
                className="mb-2 block"
                htmlFor="password1"
                value="Password"
              />
              <div className="relative w-full">
                <TextInput
                  autocomplete="off"
                  sizing="lg"
                  className="w-full"
                  id="password1"
                  type={showpassword ? "text" : "password"}
                  placeholder="Minimun 8 carateres..."
                  required
                  value={infosignup.Password}
                  onChange={(e) =>
                    setinfosignup((previousState) => ({
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
            <div id="boxes" className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  onChange={(e) =>
                    setinfosignup((previousState) => ({
                      ...previousState,
                      SavePassword: e.target.checked,
                    }))
                  }
                />
                <Label htmlFor="remember">Save the password</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  onChange={(e) =>
                    setinfosignup((previousState) => ({
                      ...previousState,
                      AcceptPrivacy: e.target.checked,
                    }))
                  }
                />
                <Label htmlFor="remember">
                  I have read and accept the{" "}
                  <Link className="text-black underline">Privacy Policy</Link>
                </Label>
              </div>
            </div>
            <Button
              type="submit"
              className="bg-black text-gray-50"
              onClick={(e) => {
                console.log("infos", infosignup);
                // e.preventDefault();
              }}
            >
              Create an account
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
      <div className="w-[55%] flex flex-col gap-7 p-4 bg-gradient-to-r from-blue-50 to-blue-300">
        <h3 className="text-center text-2xl font-semibold">
          Our account benefits
        </h3>
        <div id="benefits" className="grid grid-cols-2 gap-4 m-[2%]">
          {features.map((feature) => (
            <div className="bg-blue-100 p-5 border border-white rounded-lg flex flex-col gap-4">
              {/* icon and text */}
              <div className="flex justify-center items-center align-middle">
                <div className="p-4 bg-white rounded-full flex justify-center items-center align-middle">
                  {feature.icon}
                </div>
              </div>
              <div className="text-center font-medium text-base">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
