import React from 'react'
import {Props} from '../pages/index'

const Categories = ({ category }: Props) => {

  return (
    <div>
    {category.map((cat,index)=>{
      return <button
      key={index}
      
      >{cat}</button>
    })}
    </div>
  )
}

export default Categories