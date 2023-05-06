import React from 'react'
import { MenuProps } from '../pages'

const MenuCard = ({menu,filterMenu}:MenuProps) => {
  return (
    <div className=''>
      {menu.map((men)=>{
        const { id, title, img, price } = men;
        return(
          <article key={id}>
            <h4>{title}</h4>
            <button 
            onClick={()=>filterMenu({id, img, title, price})}
            >add</button>
          </article>
        )
      })}


    </div>
  );
};

export default MenuCard;