import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiShoppingCart } from "react-icons/fi";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "@mui/material/Rating";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { path } from "../..";

var card_info = {
  "Display:": "OLED 1440x1600",
  "Graphics:": "Adreno 540",
  "Sound:": "2x3.5mm jack",
  "Input:": "4 built-in cameras",
};
card_info = Object.entries(card_info);
export default function Card(props) {
  const desiredpath = `${path}/productdetails/${props.id}`;
  return (
    <div className="card relative hover:shadow-lg hover:rounded-b-none hover:border-b-0 w-[100%] max-w-[320px] max-h-[400px] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={desiredpath}>
        <img
          className="p-5 rounded-t-lg h-[55%] max-h-[350px] min-h-[250px] w-[100%] object-scale-down hover:scale-110"
          src={props["img-url"]}
          alt="product image"
        />
      </Link>
      <div className="bg-red-400 text-sm text-white px-1 absolute top-[-10px] left-[-10px] rounded-md">
        <span>{`- ${props.rate}%`}</span>
      </div>
      <div id="card-info" className="px-5 pb-5 flex flex-col gap-2">
        <Link to={desiredpath} className="w-full">
          <h5 className="text-md font-semibold truncate text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </Link>
        <div id="rate" className="flex items-center">
          <Rating
            name="read-only"
            value={props.rate}
            readOnly
            size="small"
            className="m-0"
          />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {props.rate}
          </span>
        </div>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          {props.price}
        </p>
        <div className="flex items-center justify-between">
          <Link
            to={desiredpath}
            className="px-[15%] py-[3%] text-white whitespace-nowrap bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
          <div className="flex justify-center items-center flex-row gap-5 px-3 py-2 bg-gray-100 border-none rounded-full">
            <FiShoppingCart className="icon-header" />
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
      <div
        id="card-product-details"
        className="hidden flex-col gap-2 absolute top-[100%] left-0 bg-white text-xs w-[100%] px-3 py-2 z-[1] shadow-xl rounded-md rounded-t-none dark:bg-gray-800 dark:border-gray-70 dark:text-white"
      >
        {card_info.map(([key, value]) => (
          <div className="flex justify-between">
            <span className="text-gray-400">{key}</span>
            <span className="border-b-2 border-b-gray-800 dark:text-white"></span>
            <span className="text-black dark:text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
