import React from "react";
import { TrackerProp } from "../pages";

const TrackedList = ({ list, onRemove, clearList }: TrackerProp) => {

  const totalPrice = list.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex flex-col items-center mt-4">
      {list.map((lis) => {
        const { id, title, img, price, quantity } = lis;
        return (
          <article key={id}>
            <div className="bg-black shadow-lg rounded-lg p-5 transform transition-transform hover:scale-105 w-[350px] mt-1">
              <div className="flex">
                <img
                  src={img}
                  alt={title}
                  className="mb-4 rounded-lg w-[70px] ml-5"
                />
                <h4 className="text-white font-sans text-xs text-center pt-4 ml-6">
                  {title.toUpperCase()} - {price}$
                </h4>
              </div>
              <div className="flex justify-evenly">
                <button className="bg-white font-sans text-black py-1 px-[30px] rounded">
                  Quantity: {quantity}
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 font-sans text-white py-1 px-[30px] rounded"
                  onClick={() => onRemove(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </article>
        );
      })}
      <div className="bg-black shadow-lg rounded-lg p-5 transform transition-transform hover:scale-105 w-[350px] mt-1">
        <h4 className="text-white font-sans text-sm text-center">
          TOTAL: {totalPrice.toFixed(2)}$
        </h4>
      </div>
    </div>
  );
};

export default TrackedList;
