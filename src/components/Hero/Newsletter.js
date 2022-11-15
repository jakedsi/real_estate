import React from 'react'

export default function Newsletter() {
  return (
    <div className='pt-[40vh]'>
        <div className='bg-[#25492e] h-[65vh] w-screen bottom-0 relative md:h-auto'>
        <div className='w-full flex justify-center'>
            <div className='w-[900px] bg-blue-700 h-[300px] flex mx-auto z-10 rounded-[50px] lg:w-full lg:h-auto absolute mt-[-150px]'>
                <div className='flex flex-col justify-center w-full items-center p-16 gap-5'>
                    <h1 className='text-[50px] font-bold text-center text-white sm:text-[40px]'>Subscribe Our Notification, News & Blog</h1>
                    <div className='relative w-[400px] 1xs:w-[300px]'>
                        <input type="text" className="w-full border border-gray-500 rounded-full py-[15px] pr-[100px] pl-[10px] outline-none text-[13px] box-border" style={{lineHeight :"1"}} placeholder="Enter your email" />
                        <button className="absolute right-1 top-1 bottom-1 border-0 bg-blue-500 text-white outline-none margin-0 px-[10px] rounded-full text-[13px] hover:bg-blue-700" type="submit" style={{zIndex:"1"}}>Get Started</button>  
                    </div>
                </div>
            </div>
        </div>
        <div className='h-full flex items-center px-[10vw] text-white justify-evenly lg:justify-between md:flex-col'>
            <div className='w-[25%] pt-[15vh] flex flex-col gap-3 lg:pt-[20vh] md:mt-[20vh] md:text-center md:items-center 1xs:mt-[30vh]'>
                <div className='text-[20px] font-medium'>JosephineParilla</div>
                <p className='text-[13px] text-gray-300 w-[250px]'>Our vision is to make everyone's life comfortable and peaceful in their residence.</p>
            </div>
            <div className='flex gap-[5rem] pt-[15vh] lg:pt-[20vh] md:pt-[10vh] 1xs:flex-col'>
                <div className='flex flex-col pt-[30px] pb-[10px] gap-3 md:text-center md:items-center'>
                    <h1 className='font-bold text-[15px] mb-5'>Support</h1>
                    <h1 className='text-[13px] text-gray-400'>Product</h1>
                    <h1 className='text-[13px] text-gray-400'>Contact</h1>
                    <h1 className='text-[13px] text-gray-400'>About</h1>
                    <h1 className='text-[13px] text-gray-400'>Service</h1>
                </div>
                <div className='flex flex-col pt-[30px] pb-[10px] gap-3 md:text-center md:items-center'>
                    <h1 className='font-bold text-[15px] mb-5'>Legal</h1>
                    <h1 className='text-[13px] text-gray-400'>Privacy Policy</h1>
                    <h1 className='text-[13px] text-gray-400'>Terms Of Service</h1>
                    <h1 className='text-[13px] text-gray-400'>Copy Right</h1>
                    <h1 className='text-[13px] text-gray-400'>Features</h1>
                </div>
                <div className='flex flex-col pt-[30px] pb-[10px] gap-3 md:text-center md:items-center'>
                    <h1 className='font-bold text-[15px] mb-5'>Support Media</h1>
                    <h1 className='text-[13px] text-gray-400'>LinkedIn</h1>
                    <h1 className='text-[13px] text-gray-400'>Instagram</h1>
                    <h1 className='text-[13px] text-gray-400'>Facebook</h1>
                    <h1 className='text-[13px] text-gray-400'>Twitter</h1>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
