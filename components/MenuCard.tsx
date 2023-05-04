import React from 'react'
import { MenuProps } from '../pages'

const MenuCard = ({menu}:MenuProps) => {
  return (
    <div className='w-[300px]'>
      {menu.map((men)=>{
        const { id, title, img, price } = men;
        return(
          <article key={id}>
            <h4>{title}</h4>
            <button>add</button>
          </article>
        )
      })}


    </div>
  );
};

export default MenuCard;