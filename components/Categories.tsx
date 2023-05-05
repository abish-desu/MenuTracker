import React from 'react'
import {Props} from '../pages/index'

const Categories = ({ category,filterItems }: Props,) => {

  return (
    <div className='flex justify-between m-5 gap-5'>
    {category.map((cat,index)=>{
      return <button
      className='bg-black text-white font-sans font-light text-base  py-2 px-4 rounded-full w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
      key={index}
      onClick={()=> filterItems(cat)}
      >{cat}</button>
    })}
    </div>
  )
}

export default Categories