import React from 'react'
import Terbaru from '../assets/svg/Terbaru';

const Tag = () => {
  return (
    <div
      className='p-2 flex flex-row rounded-lg font-semibold cursor-pointer'
      style={{ background: 'rgba(237,244,254)', color: 'rgba(10,104,244)' }}
    >
      <div className='w-6 h-6 mr-2'><Terbaru /></div>
      Terbaru
    </div>
  )
}

export default Tag;
