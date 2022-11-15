import React from 'react'
import arrow_comfort from '../../assets/svgs/arrow_comfort.svg'
import imgComfort from '../../assets/img/comfort.jpg'
export default function Comfort() {
  return (
    <div className='pt-[20vh] pb-[10vh]'>
        <div className='flex justify-center'>
            <div className='w-[900px] flex justify-between gap-[15rem] items-center md:flex-col-reverse md:gap-2'>
                <h1 className='text-[15px] text-gray-500 pl-14 md:text-center md:pl-0'>Our platform has the main principle of prioritizing customer convenience.</h1>
                <h1 className='text-[30px] text-[#030E47] w-[40%] font-semibold md:w-full md:text-center'>Comfort Is Our Priority For You</h1>
            </div>
        </div>
        <div className='flex mt-9 justify-center gap-5 items-center md:flex-col-reverse'>
                <div className='flex flex-wrap w-[600px] gap-10 justify-center md:mt-5 sm:w-auto'>
                    <div className='w-[35%] 1xs:w-[285px]'>
                        <h1 className='font-bold text-[17px] text-[#030E47] py-2'>Premium marketing</h1>
                        <h1 className='text-[13px] text-gray-500'>The marketing is very national and premium, so it's very easy to reach.</h1>
                        <div className='flex mt-2 items-center gap-2 py-1'>
                            <h1 className='text-[#0064D2] font-semibold text-[14px]'>See More</h1>
                            <img src={arrow_comfort} alt="" className='w-12'/>
                        </div>
                    </div>
                    <div className='w-[35%] 1xs:w-[285px]'>
                        <h1 className='font-bold text-[17px] text-[#030E47] py-2'>Strategic Place</h1>
                        <h1 className='text-[13px] text-gray-500'>The place is very strategic, nice, beautiful and comfortable to live in.</h1>
                        <div className='flex mt-2 items-center gap-2 py-1'>
                            <h1 className='text-[#0064D2] font-semibold text-[14px]'>See More</h1>
                            <img src={arrow_comfort} alt="" className='w-12'/>
                        </div>
                    </div>
                    <div className='w-[35%] 1xs:w-[285px]'>
                        <h1 className='font-bold text-[17px] text-[#030E47] py-2'>Spacious yard</h1>
                        <h1 className='text-[13px] text-gray-500'>The page provided is also spacious and beautiful and comfortable.</h1>
                        <div className='flex mt-2 items-center gap-2 py-1'>
                            <h1 className='text-[#0064D2] font-semibold text-[14px]'>See More</h1>
                            <img src={arrow_comfort} alt="" className='w-12'/>
                        </div>
                    </div>
                    <div className='w-[35%] 1xs:w-[285px]'>
                        <h1 className='font-bold text-[17px] text-[#030E47] py-2'>Cool air and natural</h1>
                        <h1 className='text-[13px] text-gray-500'>The air is still cool and natural, there is no pllution so it's good for health.</h1>
                        <div className='flex mt-2 items-center gap-2 py-1'>
                            <h1 className='text-[#0064D2] font-semibold text-[14px]'>See More</h1>
                            <img src={arrow_comfort} alt="" className='w-12'/>
                        </div>
                    </div>
                </div>
                <div>
                 <img src={imgComfort} alt="" className='w-[285px] h-[285px] object-cover rounded-[25px] md:w-[600px]'/>
                </div>
        </div>
       
    </div>
  )
}
