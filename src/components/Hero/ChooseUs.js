import React from 'react'
import MoneyBag from '../../assets/svgs/money_bag.svg'
import Server from '../../assets/svgs/server.svg'
import PO from '../../assets/svgs/po.svg'
import Prop from '../../assets/svgs/property.svg'
export default function ChooseUs() {
  return (
    <div className='pt-[45vh] bg-[#F2F2F2]'>
        <h1 className='text-center font-semibold text-[30px] text-[#030E47]'>Why Choose Us?</h1>
        <div className='flex flex-wrap mt-[5vh] justify-center w-[900px] items-center mx-auto gap-10 lg:w-[750px] md:w-[550px] sm:w-[90%]'>
            <div className='w-[40%] flex flex-col items-center text-center mt-[5vh] md:w-[60%]'>
                <img src={MoneyBag} alt="" className='h-10 w-10'/>
                <h1 className='font-bold text-[15px]'>Best Price</h1>
                <p className='mt-[3vh] text-[13px] text-gray-500'>We will provide the best price for you. from the best quality we give we will give you a special price compared to other place, and we will give you other bonuses</p>
            </div>
            <div className='w-[40%] flex flex-col items-center text-center mt-[5vh] md:w-[60%]'>
                <img src={Server} alt="" className='h-10 w-10'/>
                <h1 className='font-bold text-[15px]'>Quick Process</h1>
                <p className='mt-[3vh] text-[13px] text-gray-500'>An easy process is our advantage. you don’t have to bother taking care of all your needs, we will be ready to help you until it's finished</p>
            </div>
            <div className='w-[40%] flex flex-col items-center text-center mt-[5vh] md:w-[60%]'>
                <img src={PO} alt="" className='h-10 w-10'/>
                <h1 className='font-bold text-[15px]'>Custom By Request</h1>
                <p className='mt-[3vh] text-[13px] text-gray-500'>You can also change according to your request with the available thems, ranging from interior, exterior,and others according to your request</p>
            </div>
            <div className='w-[40%] flex flex-col items-center text-center mt-[5vh] md:w-[60%]'>
                <img src={Prop} alt="" className='h-10 w-10'/>
                <h1 className='font-bold text-[15px]'>Property Insurance</h1>
                <p className='mt-[3vh] text-[13px] text-gray-500'>Your property insurance is really needed in order to provide protection to you and your family, we will provide that protection easily</p>
            </div>
        </div>
    </div>
  )
}
