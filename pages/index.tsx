import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuCard from "../components/MenuCard";
import Tracker from "../components/Tracker";
import items from "./data";
import { MyType } from "./data";

interface ListItem {
  id: number;
  img: string;
  title: string;
  price: number;
}
export interface TrackerProp{
  list:ListItem[];
}


export type Props = {
  category: Array<string>;
  filterItems: (cate: string) => void;
};

export type MenuProps = {
  menu: MyType[];
  filterMenu: (items: {
    id: number;
    img: string;
    title: string;
    price: number;
  }) => void;
};
const Category: string[] = [
  "ALL",
  ...new Set(items.map((item) => item.category)),
];
const index = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [listItem, setListItem] = useState<ListItem | null>(null);
  const [cat, setCat] = useState<string[]>(Category);
  const [menutItems, setMenuItems] = useState(items);

  //Filters items trigerred from categories
  const filterItems = (cate: string) => {
    if (cate === "ALL") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === cate);
    setMenuItems(newItems);
  };

//adds clicked menu to the tracker
  const filterMenu = (rec: ListItem) => {
    setListItem(rec);
    console.log(listItem);
    setList((prevList) => [...prevList, rec]);
    console.log(list)
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
          <MenuCard menu={menutItems} filterMenu={filterMenu} />
        </div>
      </div>
      <Tracker list={list}/>
    </div>
  );
};

export default index;
