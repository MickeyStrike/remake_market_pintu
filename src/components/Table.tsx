import React from 'react'
import Bitcoin from '../assets/svg/Bitcoin'
import FilterUp from '../assets/svg/FilterUp'
import FilterDown from '../assets/svg/FilterDown'

export default function Table() {
  return (
    <table className='overflow-x border-separate w-full' cellSpacing={0} cellPadding={0}>
      <caption className='hidden'>Harga Crypto dalam Rupiah Hari Ini</caption>
      <thead>
        <tr>
          <th scope='col' className='py-5 pr-5 pl-[75px] border-t border-b border-l border-gray-200 rounded-tl-lg text-left '>
            <p>CRYPTO</p>
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200'>
            <div className='flex cursor-pointer items-center'>
              <p>HARGA</p>
              <div className='flex flex-col gap-1 mx-4'>
                <FilterUp />
                <FilterDown />
              </div>
            </div>
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200'>
            24 JAM
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200'>
            1 MGG
          </th>
          <th scope='col' className='p-5 border-t border-b border-gray-200'>
            1 BLN
          </th>
          <th scope='col' className='p-5 border-t border-b border-r border-gray-200 rounded-tr-lg'>
            1 THN
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border-b border-l'>
            <div className='p-5'>
              <div className='flex flex-row items-center'>
                <div className='text-[#f78b1a] w-8 h-8' style={{ width: 36, height: 36 }}>
                  <Bitcoin />
                </div>
                <div className='flex flex-row flex-1 flex-wrap items-center'>
                  <p className='ml-5 font-bold flex-1'>Bitcoin</p>
                  <p className='mx-5'>BTC</p>
                </div>
              </div>
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold'>
              Rp 457.487.044
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              +0.07%
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              +0.07%
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              -0.07%
            </div>
          </td>
          <td className='border-b border-r'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              +70.00%
            </div>
          </td>
        </tr>
        <tr>
          <td className='border-b border-l rounded-bl-lg'>
            <div className='p-5'>
              <div className='flex flex-row items-center'>
                <div className='text-[#f78b1a] w-8 h-8' style={{ width: 36, height: 36 }}>
                  <Bitcoin />
                </div>
                <div className='flex flex-row flex-1 flex-wrap items-center'>
                  <p className='ml-5 font-bold flex-1'>Bitcoin 2</p>
                  <p className='mx-5'>BTC</p>
                </div>
              </div>
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold'>
              Rp 457.487.044
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              +0.07%
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              +0.07%
            </div>
          </td>
          <td className='border-b'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              -0.07%
            </div>
          </td>
          <td className='border-b border-r rounded-br-lg'>
            <div className='p-5 font-bold flex flex-row align-middle justify-center'>
              +70.00%
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
