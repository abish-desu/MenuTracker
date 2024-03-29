import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuCard from "../components/MenuCard";
import Tracker from "../components/Tracker";
import items from "../data/data";
import { MyType } from "../data/data";

interface ListItem {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}
export interface TrackerProp {
  list: ListItem[];
  onRemove:(num:number) => void;
  clearList:()=>void;
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
    quantity: number;
  }) => void;
};
const Category: string[] = [
  "ALL",
  ...new Set(items.map((item) => item.category)),
];
const index = () => {
  const [list, setList] = useState<ListItem[]>([]);

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
    const existingItem = list.find((item) => item.id === rec.id);
    if (existingItem) {
      // Item already exists, increase its quantity
      setList((prevList) =>
        prevList.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1,price:item.price+rec.price }
            : item
        )
      );
    } else {
      // Item doesn't exist, add it to the list
      setList((prevList) => [...prevList, rec]);
    }
  };
  const onRemove = (id:number)=>{
    setList(list.filter((item) => item.id !== id));
  }
  const clearList = () => {
    setList([]);
  };
  return (
    //Main div

    <div className="flex mt-10">
      {/*Menu div*/}
      <div className="h-auto w-[1000px] flex justify-center">
        <div className="flex flex-col w-[800px]">
          <div className="flex justify-center">
            <h1 className="m-5 text-2xl font-sans font-semibold text-zinc-950 pb-1 border-b-4 border-t-4 border-gray-800">
              MENU
            </h1>
          </div>
          <Categories category={cat} filterItems={filterItems} />
          <MenuCard menu={menutItems} filterMenu={filterMenu} />
        </div>
      </div>
      <Tracker list={list} onRemove={onRemove} clearList={clearList}/>
    </div>
  );
};

export default index;
