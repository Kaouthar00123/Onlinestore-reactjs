import { div } from "framer-motion/client";
import React from "react";

const contact_info = [
  {
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
      </svg>
    ),
    title: "Call us directly",
    content: [
      { name: "Customers", value: "+1 50 537 53 082" },
      { name: "Franchise", value: "+1 50 537 53 000" },
    ],
  },
  {
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232 512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
      </svg>
    ),
    title: "Send a message",
    content: [
      { name: "Customers", value: "info@cartzilla.com" },
      { name: "Franchise", value: "franchise@cartzilla.com" },
    ],
  },
  {
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 512 512">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M304 192a48 48 0 0 1-48 48 48 48 0 0 1-48-48 48 48 0 0 1 96 0z"
        />
      </svg>
    ),
    title: "Store location",
    content: [
      {
        name: "Location",
        value: "New York 11741, USA 396 Lillian Bolavandy, Holbrook",
      },
    ],
  },
  {
    icon: (
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        <path d="M686.7 638.6 544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
      </svg>
    ),
    title: "Working hours",
    content: [
      {
        name: "Mon - Fri",
        value: "8:00 - 18:00",
      },
      {
        name: "Sut - Sun",
        value: "10:00 - 16:00",
      },
    ],
  },
];

export default function Contact() {
  return (
    <main>
      <section className="my-[5%] text-center flex flex-col justify-center items-center align-middle">
        <h1>Contact us</h1>
        <div
          id="contact-info"
          className="my-[2%] flex gap-5 justify-center items-start align-middle"
        >
          {contact_info.map((e) => (
            <div className="p-2 rounded-md border border-gray-300 w-1/4 font-sans text-base text-gray-400 flex flex-col gap-4 justify-center items-center align-middle">
              <div className="p-2 bg-gray-50 rounded-full text-black text-lg">
                {e.icon}
              </div>
              <div className="text-black font-semibold">{e.title}</div>
              <ul>
                {e.content.map((c) => (
                  <li>
                    <span>{c.name}</span>
                    <span>{": "}</span>
                    <span className="text-gray-800">{c.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div id="sendform" className="rounded-md">
          <p className="text-center text-lg font-semibold my-[3%]">
            Fill out the form below and we will reply within 24 hours
          </p>
          <div className="flex gap-2 bg-gray-50 w-full rounded-lg">
            <form
              action=""
              className="w-[60%] p-8 h-fit flex flex-col gap-5"
              autoComplete="on"
            >
              {/* Name */}
              <div className="w-[80%] flex flex-col items-start gap-3">
                <label
                  for="first_name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-white border border-gray-300 rounded-3xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              {/* Email */}
              <div className="w-[80%] flex flex-col items-start gap-3">
                <label
                  for="first_name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email *
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-white border border-gray-300 rounded-3xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John@gmail.com"
                  required
                />
              </div>
              {/* Subject */}
              <div className="w-[80%] flex flex-col items-start gap-3">
                <label
                  for="first_name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject *
                </label>
                <select
                  id="countries"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected className="p-2 hover:bg-gray-300">
                    Order Status
                  </option>
                  <option value="US" className="p-2 hover:bg-gray-300">
                    Product information
                  </option>
                  <option value="CA" className="p-2 hover:bg-gray-300">
                    Technical support
                  </option>
                  <option value="FR" className="p-2 hover:bg-gray-300">
                    Website feedback
                  </option>
                  <option value="DE" className="p-2 hover:bg-gray-300">
                    Account assistance
                  </option>
                </select>
              </div>
              {/* Message */}
              <div className="w-[80%] flex flex-col items-start gap-3">
                <label
                  for="first_name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              {/* Submit btn */}
              <button className="w-fit text-base font-medium text-white bg-black hover:bg-black hover:text-white px-[4%] py-[2%] border border-gray-500 rounded-full">
                Send message
              </button>
            </form>
            <img
              src="https://plus.unsplash.com/premium_photo-1683141038528-5bd315b70768?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[40%] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>
      <hr />
      <section className="m-[5%] text-center flex flex-col justify-center items-center align-middle gap-5">
        <h1>Looking for support?</h1>
        <p className="">
          We might already have what you're looking for. See our FAQs or head to
          our dedicated Help Center.
        </p>
        <button className="text-base text-black bg-white hover:bg-black hover:text-white px-[2%] py-[1%] border border-gray-500 rounded-full">
          Help Center
        </button>
      </section>
    </main>
  );
}
