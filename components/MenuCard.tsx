import React from 'react';
import { MenuProps } from '../pages';

const MenuCard = ({ menu, filterMenu }: MenuProps) => {
  return (
    <div className="flex flex-wrap">
      {menu.map((men) => {
        const { id, title, img, price } = men;
        return (
          <article key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 p-4">
            <div className="bg-black shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
              <img src={img} alt={title} className="mb-4 rounded-lg" />
              <h4 className="text-white font-mono text-xs">{title.toUpperCase()}</h4>
              <button
                onClick={() => filterMenu({ id, img, title, price })}
                className="bg-white hover:bg-blue-700 text-darkfont-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuCard;
