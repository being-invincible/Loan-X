"use client"
import { useState } from "react";
import Image from 'next/image'
import { MdDashboard, MdWorkspaces, MdTableRows } from 'react-icons/md'

const Navbar = () => {

  const [selected, setSelected] = useState('Dashboard')

  return (
    <div className='bg-black w-full h-full flex flex-col items-center pt-10 gap-[8rem] font-serif rounded-r-xl'>
      <Image src='/LoanX.png' width={125} height={50} />
      {/* Nav elements */}
      <div className='grid grid-flow-row gap-10'>
        <div className={`flex flex-row px-6 py-2 items-center gap-5 hover:cursor-pointer hover:bg-white/50 rounded-md ${selected === 'Dashboard' ? 'bg-white/50' : 'bg-none'}`}
          onClick={() => setSelected('Dashboard')}
        >
          <MdDashboard className='fill-white' />
          <p className='text-white text-md'>Dashboard</p>
        </div>
        <div className={`flex flex-row px-6 py-2 items-center gap-5 hover:cursor-pointer hover:bg-white/50 rounded-md ${selected === 'Work Space' ? 'bg-white/50' : 'bg-none'}`}
          onClick={() => setSelected('Work Space')}
        >
          <MdWorkspaces className='fill-white' />
          <p className='text-white text-md'>Work Space</p>
        </div>
        <div className={`flex flex-row px-6 py-2 items-center gap-5 hover:cursor-pointer hover:bg-white/50 rounded-md ${selected === 'List View' ? 'bg-white/50' : 'bg-none'}`}
          onClick={() => setSelected('List View')}
        >
          <MdTableRows className='fill-white' />
          <p className='text-white text-md'>List View</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar