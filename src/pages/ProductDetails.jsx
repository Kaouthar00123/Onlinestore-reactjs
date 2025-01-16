import React, { useContext, useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import Rating from "@mui/material/Rating";
import { FaFire } from "react-icons/fa";
import CarousselImages from "../components/sharedComponents/CarousselImages";
import { Tooltip, Modal, Button } from "flowbite-react";
import ReviewSection from "../components/ProductDetails/ReviewSection";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import ProductPlaceholder from "../components/ProductDetails/ProductPlaceholder";
import axios from "axios";

import ThemeContext from "..";

const sublist = [
  {
    id: 1,
    name: "Details",
  },
  { id: 2, name: "Reviewers" },
  { id: 3, name: "Delivery and returns" },
];
const delivery_info = [
  { name: "Standard delivery", time: "Within 3-7 business days" },
  { name: "Express delivery", time: "Within 1-3 business days" },
];

const apiUrl = "http://localhost:4000/products";
const addelementapiUrl = "http://localhost:4001/shoppingcart";

async function addnewelement(url, data) {
  axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((response) => {
      console.log(
        `Succes lorsque ajoute d'elment ${data} dans requete ${addelementapiUrl}, status: ${response.status}`
      );
      return response;
    })
    .catch(() => {
      console.log(
        `err lorsque ajoute d'elment ${data} dans requete ${addelementapiUrl}`
      );
      return "errer";
    });
}

export default function ProductDetails() {
  const path = useContext(ThemeContext);
  let params = useParams();
  // params.productid

  const [productDetails, setproductDetails] = useState(null);
  var sublistcontent = [
    {
      id: 1,
      element: (
        <div>{!productDetails ? <></> : <p>{productDetails.details}</p>}</div>
      ),
    },
    { id: 2, element: <ReviewSection /> },
    {
      id: 3,
      element: (
        <div className="flex gap-10">
          <div id="deliverydetails">
            <h3>Delivery</h3>
            <p>
              We strive to deliver your denim midi skirt with pockets to you as
              quickly as possible. Our estimated delivery times are as follows:
              <ul>
                {delivery_info.map((e) => (
                  <li>
                    {e.name + ": "}
                    <span className="font-semibold">{e.time}</span>
                  </li>
                ))}
              </ul>
              Please note that delivery times may vary depending on your
              location and any ongoing promotions or holidays. You can track
              your order using the provided tracking number once your package
              has been dispatched.
            </p>
          </div>
          <div id="returnsdetails">
            <h3>Returns</h3>
            <p>
              <p>
                We want you to be completely satisfied with your denim midi
                skirt with pockets. If for any reason you are not happy with
                your purchase, you can return it within 30 days of receiving
                your order for a full refund or exchange.
              </p>
              <p>
                To be eligible for a return, the skirt must be unused, unwashed,
                and in its original condition with tags attached. Please ensure
                that all packaging is intact when returning the item.
              </p>
              <p>
                To initiate a return, please contact our customer service team
                with your order number and reason for the return. We will
                provide you with a return shipping label and instructions on how
                to proceed. Please note that shipping fees are non-refundable.
              </p>
            </p>
          </div>
        </div>
      ),
    },
  ];
  const [colorChoice, setcolorChoice] = useState(null);
  const [sizeChoice, setsizeChoice] = useState(null);
  const [quantities, setquantities] = useState(1);

  const [openModal, setOpenModal] = useState(false);
  const [ZoomImage, setZoomImage] = useState(false);
  const [openPopAddtoCart, setopenPopAddtoCart] = useState(false);
  const [sectionchoice, setsectionchoice] = useState(1);

  useEffect(() => {
    // First request
    axios
      .get(apiUrl, {
        params: {
          id: params.productid,
        },
      })
      .then((response) => {
        console.log("response.data: ", response.data);
        setproductDetails(response.data[0]);
        setcolorChoice(response.data[0].colors[0]);
        setsizeChoice(response.data[0].sizes[0]);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <div className="bg-white w-full flex flex-col gap-7">
      <div id="details" className="flex flex-row gap-5">
        {!productDetails ? (
          <ProductPlaceholder />
        ) : (
          <>
            <div id="images" className="w-1/2 flex flex-col gap-3">
              <CarousselImages
                images={[
                  productDetails["img-url"],
                  ...productDetails.imagesProduct,
                ]}
                className="rounded-md shadow-md w-full h-full object-cover bg-gray-100"
              />
              <div
                id="other-images"
                className="grid grid-cols-3 gap-4 w-full justify-center items-center"
              >
                {[
                  productDetails["img-url"],
                  ...productDetails.imagesProduct,
                ].map((image) => (
                  <>
                    <img
                      src={image.src}
                      className="rounded-md shadow-md hover:cursor-pointer w-full h-full object-scale-down"
                      onClick={() => setOpenModal(true)}
                    />
                    <Modal
                      show={openModal}
                      onClose={() => setOpenModal(false)}
                      size="full"
                      className="m-0"
                    >
                      <Modal.Header></Modal.Header>
                      <Modal.Body className="items-center justify-center flex">
                        <div
                          id="imagezoomcontainer"
                          className="w-[70vw] h-[90vh]"
                        >
                          {/* <Draggable bounds="" className="bg-purple-500"> */}
                          <img
                            src={image.src}
                            alt={image.alt}
                            className={
                              "w-full h-full object-contain " +
                              (ZoomImage
                                ? "scale-125 hover:cursor-zoom-out"
                                : "scale-100 hover:cursor-zoom-in")
                            }
                            onClick={() => setZoomImage(!ZoomImage)}
                          />
                          {/* </Draggable> */}
                        </div>
                      </Modal.Body>
                    </Modal>
                  </>
                ))}
              </div>
            </div>
            <div id="descriptions" className="w-1/2 p-3 flex flex-col gap-5">
              {/* Rating */}
              <div id="rate" className="flex items-center">
                <Rating
                  name="read-only"
                  value={productDetails.rate[0]}
                  readOnly
                  size="small"
                  className="m-0"
                />
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {productDetails.rate[1]} viewers
                </span>
              </div>
              <h2>{productDetails.name}</h2>
              <div
                id="decriptions-paragrph"
                className="flex flex-col gap-3 items-start"
              >
                <p
                  id="description-productdetails"
                  className="h-[6rem] w-full text-ellipsis overflow-hidden hover:h-fit"
                >
                  {productDetails.Description}
                </p>
                <button
                  id="readmore-productdetails"
                  className="bg-white border-none hover:border-b-2 hover:border-b-black"
                >
                  Read more
                </button>
              </div>
              <h2>{productDetails.price}</h2>
              {/* Colors */}
              <div id="colors" className="flex flex-col gap-3">
                <div className="flex gap-1">
                  {productDetails.colors.map((color) => (
                    <div
                      className={
                        "rounded-full border-2 w-[30px] h-[30px] hover:border-black " +
                        (color === colorChoice ? "border-black" : "")
                      }
                      style={{ backgroundColor: color }}
                      onClick={() => setcolorChoice(color)}
                    ></div>
                  ))}
                </div>
              </div>
              {/* Sizes */}
              <div id="sizes" className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <span>Size</span>
                  <button className="bg-white text-gray-400 border-none">
                    Size guide
                  </button>
                </div>
                <div className="flex gap-1">
                  {productDetails.sizes.map((size) => (
                    <div
                      className={
                        "rounded-md border-2 border-gray-200 px-3 py-2 hover:bg-gray-300 " +
                        (size === sizeChoice ? "bg-gray-300" : "")
                      }
                      onClick={() => setsizeChoice(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              {/* Confirm Info */}
              <div className="flex justify-between items-center align-middle">
                <div
                  id="qutn"
                  className="flex justify-center align-middle items-center h-full text-xl col-span-2 w-fit rounded-md border-gray-300 border text-gray-800"
                >
                  <button
                    className="h-full bg-white px-[1rem] rounded-tl-md rounded-bl-md hover:bg-gray-100"
                    onClick={() => {
                      if (quantities > 1) setquantities(quantities - 1);
                    }}
                  >
                    -
                  </button>
                  <span className="h-full bg-white px-[1rem] flex justify-center align-middle items-center">
                    {quantities}
                  </span>
                  <button
                    className="h-full bg-white px-[1rem] rounded-tr-md rounded-br-md hover:bg-gray-300"
                    onClick={() => {
                      if (quantities < 10) setquantities(quantities + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="border-none rounded-md bg-black text-white px-[10%] py-[2%]"
                  onClick={() => {
                    const infoshoppingcart = {
                      iduser: 1,
                      idproduct: productDetails.id,
                      "img-url": productDetails["img-url"],
                      name: productDetails.name,
                      price: productDetails.price,

                      qunt: quantities,
                      "extras-info": { color: colorChoice, size: sizeChoice },
                    };
                    addnewelement(addelementapiUrl, infoshoppingcart).then(
                      setopenPopAddtoCart(true)
                    );
                  }}
                >
                  Add to cart
                  {/* //when clique add this id to card with info selected, and show modal if wanna see shopping cart or cancel */}
                </button>

                {/* //Popup add to cart */}
                <Modal
                  show={openPopAddtoCart}
                  size="md"
                  onClose={() => setopenPopAddtoCart(false)}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <div className="flex justify-center items-center align-middle mb-5">
                        <svg
                          width="2em"
                          height="2em"
                          fill="green"
                          viewBox="0 0 1024 1024"
                        >
                          <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                        </svg>
                      </div>

                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Product successfuly added to shooping cart
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button
                          color="green"
                          onClick={() => setopenPopAddtoCart(false)}
                        >
                          <Link to={path + "/shoppingcart"}>
                            See Shopping Cart
                          </Link>
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setopenPopAddtoCart(false)}
                        >
                          {"Close"}
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                {/* End popup add to cart */}
              </div>
              {/* Dilvery info */}
              <div className="flex flex-col text-black">
                <div className="flex gap-2 items-center">
                  {/* icon */}
                  <IoTimeOutline />
                  Estimated delivery:
                  <span className="text-gray-500">15 - 27 Mar, 2024</span>
                </div>
                <div className="flex gap-2 items-cente">
                  {/* icon */}
                  <CiDeliveryTruck />
                  Free shipping & returns:
                  <span className="text-gray-500">
                    On all orders over $100.00
                  </span>
                </div>
              </div>
              {/* Hook customers */}
              <div className=" flex gap-2 items-center">
                {/* Icon */}
                <FaFire className="text-orange-500" />
                Hurry up! The sale is coming to an end
              </div>
            </div>
          </>
        )}
      </div>
      <div id="other-info" className="mt-[2%]">
        {/* //menu of extras infos and details */}
        <div id="menu-details-otherinfo">
          <div className="flex flex-col gap-5">
            <div id="submenu">
              <ul className="flex gap-5 my-3">
                {sublist.map((e) => (
                  <motion.li
                    className={
                      sectionchoice === e.id ? "border-b border-b-gray-800" : ""
                    }
                  >
                    <button onClick={() => setsectionchoice(e.id)}>
                      {e.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <hr />
            </div>
            <AnimatePresence>
              <motion.div
                id="selectedsection"
                key={sectionchoice}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                {!productDetails ? (
                  <ProductPlaceholder />
                ) : (
                  sublistcontent[sectionchoice - 1].element
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
