import React from 'react'
import { TrackerProp } from '../pages'

const TrackedList = ({list}:TrackerProp) => {
  return (<div>
   {list.map((lis)=>{
        const { id, title, img, price } = lis;
        return(
          <article key={id}>
            <h4>{title}</h4>
          </article>
        )
      })}
  </div>
  )
}

export default TrackedList;