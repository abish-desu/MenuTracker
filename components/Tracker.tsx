import React from 'react'
import TrackedList from './TrackedList';
import { TrackerProp } from '../pages';

const Tracker = ({list, onRemove,clearList}: TrackerProp) => {
  return (
    <div className='flex justify-center w-[519px]'>
      <div className='flex flex-col'>
         <div className='flex justify-evenly'>
        <h1 className='m-5 text-2xl font-sans font-semibold text-zinc-950 pb-1 border-b-4 border-t-4 border-gray-800'>TRACKER</h1>
        <div className="pt-5">
          <button
            className='bg-black text-white font-sans font-light py-2 px-4 rounded-full w-40 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            onClick={()=>{clearList()} }
          >
            REFRESH
          </button>
          </div>
        </div>
        <TrackedList list={list} onRemove={onRemove} clearList={clearList}/>
      </div>
    </div> 
  )
}

export default Tracker;
