import React from 'react'

export default function Navbar() {
    const [nav, navIsActive] = React.useState(false)
  return (
    <nav>
        <div className='flex justify-between px-5 absolute w-full py-5 text-white items-center'>
            <div className='text-[20px] font-medium'>JosephineParilla</div>
            <ul className={nav ? 'flex text-[15px] gap-10 font-light md:absolute md:right-0 md:top-0 md:h-screen md:bg-[#393a37] md:w-[250px] md:z-0 md:pt-[10vh] md:flex-col md:items-center md:justify-start md:translate-x-full md:transition md:duration-500' : 'flex text-[15px] gap-10 font-light md:absolute md:right-0 md:top-0 md:h-screen md:bg-[#393a37] md:w-[250px] md:z-0 md:pt-[10vh] md:flex-col md:items-center md:justify-start md:translate-x-0 md:transition md:duration-500'}>
                
                <li className={nav ? 'md:opacity-0 md:transition-opacity' : 'md:opacity-100 md:transition-opacity md:duration-[1000ms]'}>Home</li>
                <li className={nav ? 'md:opacity-0 md:transition-opacity' : 'md:opacity-100 md:transition-opacity md:duration-[1500ms]'}>About</li>
                <li className={nav ? 'md:opacity-0 md:transition-opacity' : 'md:opacity-100 md:transition-opacity md:duration-[2000ms]'}>Pricing</li>
                <div className='md:flex font-light text-[12px] gap-3 hidden my-5'>
                    <button className='px-4 py-2'>Login</button>
                    <button className='px-4 py-2 bg-blue-500 rounded-lg'>Signup</button>
                </div>
            </ul>
            <div className='flex font-light text-[14px] gap-3 md:hidden'>
                <button className='px-5 py-3'>Login</button>
                <button className='px-5 py-3 bg-blue-500 rounded-lg'>Signup</button>
            </div>
            <div className='hidden md:flex flex-col gap-1 z-10 cursor-pointer' onClick={()=>navIsActive(prev => !prev)}>
                <div className={nav ? 'bg-white h-[2px] w-5 transition-all' : 'bg-white h-[2px] w-5 rotate-[-45deg] translate-x-[-5px] translate-y-[6px] transition-all'}></div>
                <div className={nav ? 'bg-white h-[2px] w-5 transition-all' : 'bg-white h-[2px] w-5 opacity-0'}></div>
                <div className={nav ? 'bg-white h-[2px] w-5 transition-all' : 'bg-white h-[2px] w-5 rotate-[45deg] translate-x-[-5px] translate-y-[-6px] transition-all'}></div>
            </div>
        </div>
    </nav>
  )
}
