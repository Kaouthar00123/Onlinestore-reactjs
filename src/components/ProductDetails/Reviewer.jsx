import React, { useState } from "react";
import Rating from "@mui/material/Rating";

export default function Reviewer(props) {
  const user = props.details;
  const [likes, setlikes] = useState(user.likes);
  const [userLike, setuserLike] = useState(false);

  return (
    <div className="flex gap-5 w-full p-2 border-t border-t-gray-200">
      <div id="generalReviewer" className="w-1/4 flex flex-col gap-2">
        <div id="username" className="text-base text-black font-semibold">
          {user.name}
        </div>
        <div id="date" className="text-sm text-gray-400">
          {user.date}
        </div>
        <div id="rate">
          <Rating
            name="read-only"
            value={user.rate}
            readOnly
            size="small"
            className="m-0"
          />
        </div>
      </div>
      <div id="detailsComment" className="w-3/4 flex flex-col gap-3">
        <p className="text-sm text-gray-500">{user.detailComment}</p>
        <div className="flex justify-between items-center">
          <div id="recommend" className="text-sm text-gray-800">
            {user.comment}
          </div>
          <div
            className="flex gap-4 justify-center items-center"
            id="interaction"
          >
            <span className="text-gray-800 text-sm">Helpful ?</span>
            <button
              className="border-0 rounded-md bg-gray-100 py-1 px-2 flex gap-2 justify-center items-center"
              onClick={() => {
                setlikes(likes + 1);
                setuserLike(!userLike);
              }}
            >
              {/* icon */}
              <svg
                viewBox="0 0 24 24"
                fill={userLike ? "black" : "white"}
                stroke="black"
                height="1em"
                width="1em"
              >
                <path d="M4 21h1V8H4a2 2 0 00-2 2v9a2 2 0 002 2zM20 8h-7l1.122-3.368A2 2 0 0012.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 00-2-2z" />
              </svg>
              {/* likes */}
              <span>{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
