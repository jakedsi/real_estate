import React from 'react'
import FeedbackImg from '../../assets/img/feedback.jpg'
import FeedbackPerson from '../../assets/img/feedback_person.jpg'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
export default function Feedback() {
  return (
    <div className='pt-[20vh] pb-[10vh]'>
        <div className='flex w-[900px] mx-auto gap-[5rem] items-center justify-center md:w-[320px]'>
            <img src={FeedbackImg} alt="" className='w-[320px] h-[320px] object-cover rounded-[25px] md:hidden'/>
            <div className='flex flex-col w-[350px] gap-5 md:justify-center'>
                <h1 className='text-[30px] font-bold text-[#030E47]'>What Our Customer Say About Us</h1>
                <h1 className='text-[13px] text-gray-500'>We were very impressed with The Real Estate velues and selling method. In oarticular. we did not want open inspections or to sell by auction.</h1>
                <div className='flex items-center gap-5'>
                    <img src={FeedbackPerson} alt="" className='h-10 w-10 object-cover rounded-full' />
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Fahim Ahmed</h1>
                        <h1 className='text-blue-400 text-[13px]'>Customer</h1>
                    </div>
                </div>
                <div className='flex justify-end gap-3'>
                    <button className='border border-gray-400 p-2 rounded-full text-gray-400'><AiOutlineArrowLeft fontSize="20px"/></button>
                    <button className='border border-gray-400 p-2 rounded-full text-white bg-blue-700'><AiOutlineArrowRight fontSize="20px"/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
