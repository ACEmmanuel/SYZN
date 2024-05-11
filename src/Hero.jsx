import React from 'react'
import Partner from './Partner'

const Hero = () => {
  return (
    <>
        <section className='container mx-auto text-white/90 font-rale p-4 lg:px-10 mt-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>


                <div className='flex flex-col gap-y-[1rem] text-center lg:text-left order-2 lg:order-1 max-w-xl mx-auto'>
                    <span className='space-y-2 '>
                        <h4>ACCEPT AND BILL CRYPTO</h4>
                        <h1>Pay in the most popular crypto currencies</h1>
                    </span>    
                    <h5>Send invoices, collect payment, convert payouts to fiat currency, or keep the cryptocurrency</h5>

                    <button className='btn mx-auto lg:ml-0'>Get started</button>

                    <Partner />
                </div>
               

                <div className='order-1 lg:order-2 relative mx-auto'>
                    <img src='world.png' className='size-[18rem] lg:size-[25rem] mx-auto'/>

                    <img src='dollarf.png' className='absolute top-0 size-[100%] aspect-square -z-50 object-contain' />

                    <img src='comment.png' className='absolute top-0 size-[100%] aspect-square object-contain p-[1rem]' />
                </div>


            </div>
        </section>
    </>
  )
}


export default Hero