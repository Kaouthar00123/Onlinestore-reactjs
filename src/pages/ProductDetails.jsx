import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import Rating from "@mui/material/Rating";
import { FaFire } from "react-icons/fa";
import CarousselImages from "../components/sharedComponents/CarousselImages";
import { Tooltip, Modal } from "flowbite-react";
import ReviewSection from "../components/ProductDetails/ReviewSection";
import { useParams } from "react-router";

const imagesProduct = [
  {
    src: "https://cartzilla-html.createx.studio/assets/img/shop/fashion/product/01.png",
    alt: "",
  },
  {
    src: "https://cartzilla-html.createx.studio/assets/img/shop/fashion/product/05.png",
    alt: "",
  },
  {
    src: "https://cartzilla-html.createx.studio/assets/img/shop/fashion/product/04.png",
    alt: "",
  },
  {
    src: "https://cartzilla-html.createx.studio/assets/img/shop/fashion/product/03.png",
    alt: "",
  },
  {
    src: "https://cartzilla-html.createx.studio/assets/img/shop/fashion/product/02.png",
    alt: "",
  },
];
const productDetails = {
  name: "Denim midi skirt with pockets",
  Description: `Made from high-quality denim fabric, this midi skirt offers durability and comfort for all-day wear. The mid-length design strikes the perfect balance between casual and chic, making it suitable for various occasions, from casual outings to semi-formal events.
                One of the standout features of this skirt is its functional pockets. With two spacious pockets at the front, you can conveniently carry your essentials such as keys, phone, or wallet without the need for a bulky bag. The pockets also add a touch of utility and flair to the overall look.`,
  price: "$126.50",
  colors: ["black", "gray", "white", "red"],
  sizes: ["XS", "S", "M", "L", "XL"],
  rate: [4, 76],
};

export default function ProductDetails() {
  let params = useParams();
  // params.productid
  console.log("params.productid: ", params.productid);

  const [colorChoice, setcolorChoice] = useState(productDetails.colors[0]);
  const [quantities, setquantities] = useState(1);
  const [sizeChoice, setsizeChoice] = useState(productDetails.sizes[0]);
  const [openModal, setOpenModal] = useState(false);
  const [ZoomImage, setZoomImage] = useState(false);
  const [showreviewers, setshowreviewers] = useState(true);
  return (
    <div className="bg-white w-full flex flex-col gap-7">
      <div id="details" className="flex flex-row gap-5">
        <div id="images" className="w-1/2 flex flex-col gap-3">
          {/* <img
            src={imagesProduct[0].src}
            alt=""
            className="bg-gray-100 rounded-md shadow-md w-full"
          /> */}
          <CarousselImages
            images={imagesProduct}
            className="rounded-md shadow-md w-full bg-gray-100"
          />
          <div
            id="other-images"
            className="grid grid-cols-3 gap-4 w-full justify-center items-center"
          >
            {imagesProduct.map((image) => (
              // <Tooltip
              //   content="This is image, click to see it more clearly !"
              //   style="light"
              //   placement="bottom"
              // > <Tooltip/>
              <>
                <img
                  src={image.src}
                  className="rounded-md shadow-md"
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
                    <div id="imagezoomcontainer" className="w-[70vw] h-[90vh]">
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
            <p className="h-[12vh] w-full overflow-hidden hover:">
              {productDetails.Description}
            </p>
            <button className="bg-white border-none hover:border-b-2 hover:border-b-black">
              Read more
            </button>
          </div>
          <h2>{productDetails.price}</h2>
          {/* Colors */}
          <div id="colors" className="flex flex-col gap-3">
            Color: <span>{colorChoice}</span>
            <div className="flex gap-1">
              {productDetails.colors.map((color) => (
                <div
                  className={`rounded-full border-2 w-[30px] h-[30px] hover:border-black`}
                  style={{ backgroundColor: color }}
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
                  className={`rounded-md border-2 border-gray-200 px-3 py-2 hover:bg-gray-300`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          {/* Confirm Info */}
          <div className="flex justify-between">
            <div id="qutn" className="rounded-md border-gray-700">
              <button
                className="bg-white text-gray-400 px-3 py-2 hover:bg-gray-300"
                onClick={() => {
                  if (quantities > 1) setquantities(quantities - 1);
                }}
              >
                -
              </button>
              <span className="bg-white text-gray-400 px-3 py-2">
                {quantities}
              </span>
              <button
                className="bg-white text-gray-400 px-3 py-2 hover:bg-gray-300"
                onClick={() => {
                  if (quantities < 10) setquantities(quantities + 1);
                }}
              >
                +
              </button>
            </div>
            <button className="border-none rounded-md bg-black text-white px-[10%] py-[3%]">
              Add to cart
            </button>
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
              <span className="text-gray-500">On all orders over $100.00</span>
            </div>
          </div>
          {/* Hook customers */}
          <div className=" flex gap-2 items-center">
            {/* Icon */}
            <FaFire className="text-orange-500" />
            Hurry up! The sale is coming to an end
          </div>
        </div>
      </div>
      <div id="other-info">
        <ReviewSection />
      </div>
    </div>
  );
}
