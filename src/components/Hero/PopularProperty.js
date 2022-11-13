import React from 'react'
import Pop1 from '../../assets/img/popular_1.jpg'
import Pop2 from '../../assets/img/popular_2.jpg'
import Pop3 from '../../assets/img/popular_3.jpg'
import {BsHouse} from 'react-icons/bs'
import {MdOutlineBedroomChild} from 'react-icons/md'
import {CgKeyhole} from 'react-icons/cg'
export default function PopularProperty() {
  return (
    <div className='mt-[10vh]'>
        <div className='flex justify-center'>
            <div className='w-[900px]'>
                <h1 className='font-semibold text-[30px] text-[#030E47] md:text-center'>Our Popular Property</h1>
            </div>
        </div>
        <div className='flex justify-center mt-[5vh]'>
            <div className='w-[900px] flex flex-wrap gap-5 justify-between md:justify-center'>
                <div className='w-[30%] h-[335px] border-2 rounded-[25px] flex flex-col items-center p-2 hover:shadow-xl hover:translate-y-[-10px] hover:transition-all hover:duration-[500ms] translate-y-0 transition-all duration-[500ms] md:w-[40%] sm:w-[300px]'>
                    <img src={Pop1} alt="" className='rounded-[25px] w-full h-[200px] object-cover' />
                    <h1 className='text-left w-full mt-[15px] text-[12px] pl-2 text-[#030E47] font-medium'>4 Bed Appartment, London</h1>
                    <div className='flex mt-[2vh] justify-around w-full text-gray-500'>
                        <div className='flex items-center gap-1'>
                            <BsHouse fontSize="11px"/>
                            <h1 className='text-[11px]'>Full Furnish</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdOutlineBedroomChild fontSize="11px"/>
                            <h1 className='text-[11px]'>25 Rooms</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <CgKeyhole fontSize="11px"/>
                            <h1 className='text-[11px]'>1800m'</h1>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full px-3 mt-auto'>
                        <h1 className='text-[#030E47] font-semibold'>Php 200,000</h1>
                        <button className='px-3 py-1 border-[1px] rounded-[25px] text-[#030E47] font-semibold text-[13px] hover:bg-[#0064d2] hover:text-white'>Buy Now</button>
                    </div>
                </div>
                <div className='w-[30%] h-[335px] border-2 rounded-[25px] flex flex-col items-center p-2 hover:shadow-xl hover:translate-y-[-10px] hover:transition-all hover:duration-[500ms] translate-y-0 transition-all duration-[500ms] md:w-[40%] sm:w-[300px]'>
                    <img src={Pop2} alt="" className='rounded-[25px] w-full h-[200px] object-cover' />
                    <h1 className='text-left w-full mt-[15px] text-[12px] pl-2 text-[#030E47] font-medium'>5 FloorFlat, Brasil</h1>
                    <div className='flex mt-[2vh] justify-around w-full text-gray-500'>
                        <div className='flex items-center gap-1'>
                            <BsHouse fontSize="11px"/>
                            <h1 className='text-[11px]'>Full Furnish</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdOutlineBedroomChild fontSize="11px"/>
                            <h1 className='text-[11px]'>25 Rooms</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <CgKeyhole fontSize="11px"/>
                            <h1 className='text-[11px]'>1800m'</h1>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full px-3 mt-auto'>
                        <h1 className='text-[#030E47] font-semibold'>Php 400,000</h1>
                        <button className='px-3 py-1 border-[1px] rounded-[25px] text-[#030E47] font-semibold text-[13px] hover:bg-[#0064d2] hover:text-white'>Buy Now</button>
                    </div>
                </div>
                <div className='w-[30%] h-[335px] border-2 rounded-[25px] flex flex-col items-center p-2 hover:shadow-xl hover:translate-y-[-10px] hover:transition-all hover:duration-[500ms] translate-y-0 transition-all duration-[500ms] md:w-[40%] sm:w-[300px]'>
                    <img src={Pop3} alt="" className='rounded-[25px] w-full h-[200px] object-cover' />
                    <h1 className='text-left w-full mt-[15px] text-[12px] pl-2 text-[#030E47] font-medium'>Appartment sale, Russia</h1>
                    <div className='flex mt-[2vh] justify-around w-full text-gray-500'>
                        <div className='flex items-center gap-1'>
                            <BsHouse fontSize="11px"/>
                            <h1 className='text-[11px]'>Full Furnish</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdOutlineBedroomChild fontSize="11px"/>
                            <h1 className='text-[11px]'>25 Rooms</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <CgKeyhole fontSize="11px"/>
                            <h1 className='text-[11px]'>1800m'</h1>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full px-3 mt-auto'>
                        <h1 className='text-[#030E47] font-semibold'>Php 250,000</h1>
                        <button className='px-3 py-1 border-[1px] rounded-[25px] text-[#030E47] font-semibold text-[13px] hover:bg-[#0064d2] hover:text-white'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
