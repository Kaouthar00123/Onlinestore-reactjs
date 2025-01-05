import React, { useState } from "react";
import Reviewer from "./Reviewer";
import { Button, Modal } from "flowbite-react";
import Rating from "@mui/material/Rating";
import { motion, AnimatePresence } from "framer-motion";

const reviewers = [
  {
    name: "Kaouthar Micheal",
    date: "May, 05, 2022",
    rate: 5,
    comment: "Yes, I recommend this product",
    detailComment:
      "Absolutely love this chair! It's exactly what I was looking for to complete my Scandinavian-themed living room. The wooden legs add a touch of warmth and the design is timeless. Comfortable and sturdy, couldn't be happier with my purchase!",
    likes: 1,
  },
  {
    name: "Maria Maroua",
    date: "Junary, 11, 2024",
    rate: 2,
    comment: "No, I don't recommend this product",
    detailComment:
      "While the design of the chair is nice and it does add a touch of retro vibe to my space, I found the quality to be lacking. After just a few weeks of use, one of the legs started to wobble, and the seat isn't as comfortable as I had hoped. Disappointed with the durability. Additionally, the assembly process was a bit frustrating as some of the screws didn't align properly with the holes, requiring extra effort to secure them in place. Overall, while it looks good, I expected better quality for the price.",
    likes: 3,
  },
  {
    name: "Reda Micheal",
    date: "May, 05, 2022",
    rate: 4,
    comment: "Yes, I recommend this product",
    detailComment:
      "Absolutely love this chair! It's exactly what I was looking for to complete my Scandinavian-themed living room. The wooden legs add a touch of warmth and the design is timeless. Comfortable and sturdy, couldn't be happier with my purchase!",
    likes: 10,
  },
];
function averageArray(array) {
  let sum = 0;
  array.forEach((num) => {
    sum += num.rate;
  });
  return Math.round(sum / array.length);
}
export default function ReviewSection() {
  const [showreviewers, setshowreviewers] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  return (
    <section>
      <AnimatePresence mode="popLayout">
        <h3
          className="text-xl text-black font-semibold mb-5 mt-7 flex gap-3 items-center hover:cursor-pointer"
          onClick={() => setshowreviewers(!showreviewers)}
        >
          Reviewers
          <span>
            {/* icon */}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </span>
        </h3>
        {/* This part is controlled */}
        <AnimatePresence>
          {showreviewers && (
            <motion.div
              className="relative bg-white"
              layout
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
            >
              <div
                id="resume"
                className="flex justify-between align-middle items-center"
              >
                <div id="resumereview" className="flex flex-col gap-3 my-5">
                  <h4
                    id="reviwetitle"
                    className="text-xl text-black font-semibold"
                  >
                    Customer reviews
                  </h4>
                  <div
                    id="reviewresume"
                    className="flex gap-2 justify-center align-middle"
                  >
                    <Rating
                      name="read-only"
                      value={averageArray(reviewers)}
                      readOnly
                      size="small"
                    />
                    <span className="text-sm text-gray-500">
                      Based on {reviewers.length} reviews
                    </span>
                  </div>
                </div>
                <div id="leavereview">
                  <button
                    className="bg-white text-gray-900 text-base rounded-md px-4 py-2 border border-gray-400 hover:bg-black hover:text-white"
                    onClick={() => setOpenModal(true)}
                  >
                    Leave a review
                  </button>
                  {/* Modal (rexiew form) */}
                  <Modal
                    size="md"
                    show={openModal}
                    onClose={() => setOpenModal(false)}
                  >
                    <Modal.Header>Leave a review</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-6">
                        <form action="#" method="POST" className="space-y-6">
                          <div id="reviewer-name">
                            <label
                              htmlFor="email"
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              Your name
                            </label>
                            <div className="mt-2">
                              <input
                                id="name"
                                name="name"
                                type="name"
                                required
                                autoComplete="name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>
                          <div id="reviewer-email">
                            <label
                              htmlFor="email"
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>
                          <div id="reviewer-email">
                            <label
                              htmlFor=""
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              Rating
                            </label>
                            <Rating
                              name="simple-controlled"
                              // value={value}
                              className="m-1 ms-0"
                            />
                          </div>
                          <div id="Comment">
                            <label
                              for="message"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your Comment
                            </label>
                            <textarea
                              id="message"
                              rows="4"
                              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Write your thoughts here..."
                            ></textarea>
                          </div>
                          <div
                            id="recommand"
                            className="flex gap-3 justify-center align-middle items-center"
                          >
                            <div class="flex items-center">
                              <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="default-radio-1"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Yes, i recommand it.
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input
                                checked
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="default-radio-2"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                No, i don't recommand it.
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => setOpenModal(false)}>
                        Submit review
                      </Button>
                      <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <div id="reviewers" className="flex flex-col gap-5">
                {reviewers.map((reviewer) => (
                  <Reviewer details={reviewer} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </section>
  );
}
