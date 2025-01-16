import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiShoppingCart } from "react-icons/fi";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "@mui/material/Rating";
import { Badge } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import ThemeContext from "../..";

var card_info = {
  "Display:": "OLED 1440x1600",
  "Graphics:": "Adreno 540",
  "Sound:": "2x3.5mm jack",
  "Input:": "4 built-in cameras",
};
card_info = Object.entries(card_info);

export default function Card(props) {
  const path = useContext(ThemeContext);
  const location = useLocation();
  const desiredpath = `${
    location.pathname.toString() == "/" ? "home" : location.pathname.toString()
  }/details-product/${props.id}`;
  return (
    <div className="card relative hover:shadow-lg hover:rounded-b-none hover:border-b-0 w-[100%] max-w-[320px] max-h-[400px] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={desiredpath}>
        <img
          className="p-5 rounded-t-lg h-[55%] max-h-[350px] min-h-[250px] w-[100%] object-scale-down hover:scale-110"
          src={props["img-url"].src}
          alt={props["img-url"].alt}
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
        <div className="flex items-center justify-between gap-3">
          <Link
            to={desiredpath}
            className="w-[80%] px-[15%] py-[3%] text-white whitespace-nowrap bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
          <div className="w-[20%] flex justify-center items-center flex-row gap-5 px-3 py-2 bg-gray-100  border-none rounded-full">
            <FiShoppingCart className="icon-header" />
            {/* <svg
              width="1.3em"
              height="1.3em"
              fill="currentColor"
              viewBox="0 0 1024 1024"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z" />
            </svg> */}
            {/* <FontAwesomeIcon icon={faHeart} /> */}
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
