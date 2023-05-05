import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuCard from "../components/MenuCard";
import Tracker from "../components/Tracker";
import items from "./data";
import { MyType } from "./data";

export type Props = {
  category: Array<string>;
  filterItems: (category: string) => void;

};

export type MenuProps = {
  menu: MyType[];
};

const Category: string[] = [
  "ALL",
  ...new Set(items.map((item) => item.category)),
];
const index = () => {
  const [cat, setCat] = useState<string[]>(Category);
  const [menutItems, setMenuItems] = useState(items);


// filter menu
  const filterMenu =()=>{
    

  }

  //Filters items trigerred from categories
  const filterItems = (category: string) => {
    if (category === "ALL") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    //Main div
    <div className="flex mt-10">
      {/*Menu div*/}
      <div className="h-auto w-[1000px] flex justify-center">
        <div className="flex flex-col w-[700px]">
          <div className="flex justify-center">
            <h1 className="m-5 text-2xl font-sans font-semibold text-zinc-950 pb-1 border-b-4 border-t-4 border-gray-800">
              MENU
            </h1>
          </div>
          <Categories category={cat} filterItems={filterItems} />
          <MenuCard menu={menutItems} />
        </div>
      </div>
      <Tracker />
    </div>
  );
};

export default index;
