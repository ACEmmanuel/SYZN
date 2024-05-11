import React from 'react'
import { cards } from './data';

const Card = () => {
        


    return (
        <div>
        {
            
            cards.map((e) => {
                const {id, name, about, img, style} = e;
                
                return (
                    <>
                    <div className='w-full rounded-xl flex flex-col justify-center items-center  bg-[#1A1C2C] lg:flex-row lg:items-center py-8 px-8 gap-4 lg:gap-x-8 mt-10 max-w-[35rem] mx-auto text-center lg:text-left'  key={id}>

                            <img src={img} className='w-[4.5rem] lg:w-[3rem] '/>

                            <div className='space-y-4'>
                                <p className=' text-[29px] lg:text-[25px] font-medium font-rale' style={style}>{name}</p>
                                <p className='font-DM text-[16px]'>{about}</p>
                            </div>
                    </div>
                    </>
                    )
            })
        }
        </div>
    )
}

export default Card;