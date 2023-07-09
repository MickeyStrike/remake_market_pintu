import React from 'react'
import Tag from './Tag';

const TagSection = () => {
  return (
    <div className='flex flex-row flex-nowrap overflow-x-auto pb-4 pt-1 gap-2'>
      {
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => (
          <Tag />
        ))
      }
    </div>
  )
}

export default TagSection;
