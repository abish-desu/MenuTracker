import React from 'react'
import {Props} from '../pages/index'

const Categories = ({ category,filterItems }: Props,) => {

  return (
    <div>
    {category.map((cat,index)=>{
      return <button
      key={index}
      onClick={()=> filterItems(cat)}
      >{cat}</button>
    })}
    </div>
  )
}

export default Categories