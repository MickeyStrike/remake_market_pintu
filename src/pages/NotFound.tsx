import React from 'react'
import NotFoundImg from '../assets/svg/NotFoundImg'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
      <NotFoundImg />
      <button onClick={() => navigate('/market')} className='bg-blue-500 rounded-lg p-3 text-white'>Back to Market</button>
    </div>
  )
}
