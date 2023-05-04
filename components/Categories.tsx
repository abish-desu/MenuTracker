import React from 'react'
import {Props} from '../pages/index'

const Categories = ({ category,filterItems }: Props,) => {

  return (
    <div className='flex justify-evenly m-5'>
    {category.map((cat,index)=>{
      return <button
      className='bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full'
      key={index}
      onClick={()=> filterItems(cat)}
      >{cat}</button>
    })}
    </div>
  )
}

export default Categories