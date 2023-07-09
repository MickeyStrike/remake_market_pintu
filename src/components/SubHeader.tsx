import React from 'react'
import Search from '../assets/svg/Search'

export default function SubHeader() {
  return (
    <div className='flex flex-row justify-between'>
      <h1 className='font-bold text-3xl'>Harga Crypto dalam Rupiah Hari ini</h1>
      <div className='flex flex-row bg-gray-100 py-3 px-4 rounded-lg'>
        <Search />
        <input
          className='ml-4 bg-transparent focus:outline-none w-96'
          type='text'
          placeholder='Cari aset di Pintu...'
        />
      </div>
    </div>
  )
}
