import React from "react";
import { TrackerProp } from "../pages";

const TrackedList = ({ list }: TrackerProp) => {
  return (
    <div className="flex flex-col items-center mt-4"> {/* Updated line */}
      {list.map((lis) => {
        const { id, title, img, price } = lis;
        return (
          <article key={id}>
            <div className="bg-black shadow-lg rounded-lg p-5 transform transition-transform hover:scale-105 w-[350px] mt-2">
              <div className="flex justify-evenly">
                <img
                  src={img}
                  alt={title}
                  className="mb-4 rounded-lg w-[70px]"
                />
                <h4 className="text-white font-sans text-xs text-center pt-4">
                  {title.toUpperCase()} - {price}$
                </h4>
              </div>
              <div className="flex justify-evenly">
                <button className="bg-white hover:bg-gray-300 text-black py-1 px-[30px]  rounded">
                  Quantity: 0
                </button>
                <button className="bg-red-700 hover:bg-red-600 text-white py-1 px-[30px]  rounded">
                  Remove
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default TrackedList;
