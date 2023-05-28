import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {RxSketchLogo,RxDashboard,RxPerson} from "react-icons/rx"
import {FiSettings} from "react-icons/fi"
import {HiOutlineShoppingBag} from "react-icons/hi"

export const Sidebar = ({children}) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          {/* logo cua app */}
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          {/* các icon còn lại */}
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-point my-4 text-black p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-point my-4 text-black p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-point my-4 text-black p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-point my-4 text-black p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>

      </div>
      <main className='ml-20 w-full'>
        {children}
      </main>
    </div>
  )
}
