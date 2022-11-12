import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='flex justify-between px-5 absolute w-full py-5 text-white items-center'>
            <div className='text-[20px] font-medium'>JosephineParilla</div>
            <ul className='flex text-[15px] gap-10 font-light'>
                <li className='font-normal'>Home</li>
                <li>About</li>
                <li>Pricing</li>
            </ul>
            <div className='flex font-light text-[14px] gap-3'>
                <button className='px-5 py-3'>Login</button>
                <button className='px-5 py-3 bg-blue-500 rounded-lg'>Signup</button>
            </div>
        </div>
    </div>
  )
}
