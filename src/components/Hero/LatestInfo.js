import React from 'react'
import Latest1 from '../../assets/img/latest_1.jpg'
import Latest2 from '../../assets/img/latest_2.jpg'
import Latest3 from '../../assets/img/latest_3.jpg'
import {BsDot} from 'react-icons/bs'
export default function LatestInfo() {
  return (
    <div className='py-[10vh] bg-[#F2F2F2]'>
        <div className='flex justify-center'>
            <div className='w-[900px] flex justify-between gap-[5rem] items-center md:flex-col-reverse md:gap-2'>
                <h1 className='text-[30px] text-[#030E47] font-semibold'>Latest Housing Information</h1>
                <h1 className='text-[15px] text-gray-500 flex justify-center gap-5'>Latest Real Estate Blogs<br/>
                <button className='px-5 py-1 bg-blue-500 rounded-lg text-[11px] text-white text-center mx-auto'>See All Articles</button>
                </h1>
            </div>
        </div>
        <div className='flex justify-center mt-[5vh]'>
            <div className='w-[900px] flex flex-wrap gap-5 justify-around'>
                <div className='w-[30%] h-[320px] flex flex-col p-2 justify-start items-start'>
                    <img src={Latest1} alt="" className='rounded-[20px] w-full h-[150px] object-cover' />
                    <div className='pt-2 py-1 flex items-center border-b border-[#796e52]'>
                        <BsDot  fontSize="15px" className='text-[#866e2b]'/>
                        <h1 className='text-gray-500 text-[12px]'>21 November 2021</h1>
                    </div>
                    <h1 className='pr-3 mt-3'>Home Sales About To Surge? We Many See a Summer Like Never Before.</h1>
                    <button className='px-4 py-1 bg-blue-500 rounded-lg text-[11px] text-white text-center mt-auto'>Read More</button>
                </div>
                <div className='w-[30%] h-[320px] flex flex-col p-2 justify-start items-start'>
                    <img src={Latest2} alt="" className='rounded-[20px] w-full h-[150px] object-cover' />
                    <div className='pt-2 py-1 flex items-center border-b border-[#796e52]'>
                        <BsDot  fontSize="15px" className='text-[#866e2b]'/>
                        <h1 className='text-gray-500 text-[12px]'>22 November 2021</h1>
                    </div>
                    <h1 className='pr-3 mt-3'>Retiretment May Be Changing What You Need In a Home</h1>
                    <button className='px-4 py-1 bg-blue-500 rounded-lg text-[11px] text-white text-center mt-auto'>Read More</button>
                </div>
                <div className='w-[30%] h-[320px] flex flex-col p-2 justify-start items-start'>
                    <img src={Latest3} alt="" className='rounded-[20px] w-full h-[150px] object-cover' />
                    <div className='pt-2 py-1 flex items-center border-b border-[#796e52]'>
                        <BsDot  fontSize="15px" className='text-[#866e2b]'/>
                        <h1 className='text-gray-500 text-[12px]'>23 November 2021</h1>
                    </div>
                    <h1 className='pr-3 mt-3'>Housing Challenge or Housing Opportunity? It Depends.</h1>
                    <button className='px-4 py-1 bg-blue-500 rounded-lg text-[11px] text-white text-center mt-auto'>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
