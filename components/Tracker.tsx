import React from 'react'
import TrackedList from './TrackedList';
import { TrackerProp } from '../pages'
const Tracker = ({list}:TrackerProp) => {
  return (
   
     <div className='flex justify-center w-[519px]' >
      <div className='flex flex-col'>
         <div className='flex justify-center'> 
      <h1 className='m-5 text-2xl font-sans font-semibold text-zinc-950 pb-1 border-b-4 border-t-4 border-gray-800'>TRACKER</h1>
      </div>
      <TrackedList list={list}/>
     </div>
     </div> 
  )
}

export default Tracker;

