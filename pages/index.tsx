import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuCard from '../components/MenuCard';

import items from './data';

export type Props = {
  category:Array<string>;
  
};
const Category:string[] = ['all', ...new Set(items.map((item) => item.category))];
const index = () => {
 const [cat,setCat] = useState<string[]>(Category);
  return (
    //Main div
    <div>
      {/*Menu div*/ }   
      <div>
        <h1>Menu</h1>
        <Categories category={cat}/>
        <MenuCard/>
      </div>
      {/* tracker inteface */}
    </div>
  )
}

export default index