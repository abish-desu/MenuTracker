import React, { useState  } from 'react';
import Categories from '../components/Categories';
import MenuCard from '../components/MenuCard';
import Tracker from '../components/Tracker';
import items from './data';
import {MyType} from './data'

export type Props = {
  category:Array<string>;
  filterItems: (category: string) => void;
};
export type MenuProps={
  menu:MyType[];
}



const Category:string[] = ['all', ...new Set(items.map((item) => item.category))];
const index = () => {

  const [cat,setCat] = useState<string[]>(Category);
 const [menutItems,setMenuItems] = useState(items);
 
  //Filters items trigerred from categories 
  const filterItems = (category:string)=>{
if (category==="all"){
    setMenuItems(items);
    return;
}
const newItems= items.filter((item) => item.category === category)
  setMenuItems(newItems);
};
  
return (
  //Main div
  <div className='flex'>
    {/*Menu div*/ }   
    <div className='h-[400px] w-[400px] ' >
      <h1>Menu</h1>
      <Categories category={cat} filterItems={filterItems}/>
      <MenuCard menu={menutItems} />
    </div>
    <Tracker/>
  </div>
)
}

export default index
