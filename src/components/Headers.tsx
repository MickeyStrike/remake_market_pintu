import React from 'react'
import { Link } from 'react-router-dom'
import PintuLogo from '../assets/svg/PintuLogo'
import ID from '../assets/svg/Id'
import DownArrow from '../assets/svg/DownArrow'

export default function Headers() {
  return (
    <div className='py-8 px-6'>
      <div className='flex flex-row justify-between'>
        <Link to='/'>
          <PintuLogo />
        </Link>
        <div className='flex flex-row gap-[5rem] font-medium'>
          <Link to='/fitur'>Fitur</Link>
          <Link to='/ptu'>PTU</Link>
          <Link to='/edukasi'>Edukasi</Link>
          <Link to='/ikut-kami'>Ikuti Kami</Link>
          <Link to='/blog-news'>Blog & News</Link>
          <Link to='/karier'>Karier</Link>
          <span className='flex flex-row gap-[0.375rem]'>
            <ID />
            ID
            <div className='rotate-180 flex items-center'>
              <DownArrow />
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
