import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import Rating from "@mui/material/Rating";
import { FaFire } from "react-icons/fa";
import CarousselImages from "../components/sharedComponents/CarousselImages";
import { Tooltip, Modal, Button } from "flowbite-react";
import ReviewSection from "../components/ProductDetails/ReviewSection";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { path } from "..";

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
  id: 1,
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
  let location = useLocation();
  // params.productid
  console.log("params.productid: ", params.productid);
  console.log("location.path: ", location.pathname);
  //get specfique details of product of id productid
  const [colorChoice, setcolorChoice] = useState(productDetails.colors[0]);
  const [quantities, setquantities] = useState(1);
  const [sizeChoice, setsizeChoice] = useState(productDetails.sizes[0]);
  const [openModal, setOpenModal] = useState(false);
  const [ZoomImage, setZoomImage] = useState(false);
  const [showreviewers, setshowreviewers] = useState(true);
  const [openPopAddtoCart, setopenPopAddtoCart] = useState(false);

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
                  className="rounded-md shadow-md hover:cursor-pointer"
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
              className="col-span-2 w-fit rounded-md border-gray-300 border text-gray-800"
            >
              <button
                className="bg-white  px-2 py-[0.25rem] rounded-tl-md rounded-bl-md hover:bg-gray-100"
                onClick={() => {
                  if (quantities > 1) setquantities(quantities - 1);
                }}
              >
                -
              </button>
              <span className="bg-white  px-2 py-[0.25rem]">{quantities}</span>
              <button
                className="bg-white  px-2 py-[0.25rem] rounded-tr-md rounded-br-md hover:bg-gray-300"
                onClick={() => {
                  if (quantities < 10) setquantities(quantities + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className="border-none rounded-md bg-black text-white px-[10%] py-[3%]"
              onClick={() => setopenPopAddtoCart(true)}
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
                      <Link to={path + "/shoppingcart"}>See Shopping Cart</Link>
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
