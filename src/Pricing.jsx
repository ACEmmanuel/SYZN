import React from 'react'
import Price1 from './Price/Price1';
import Price2 from './Price/Price2';
import Price3 from './Price/Price3';

const Pricing = () => {
  return (
    <>
        <section className='container mx-auto text-white/90 font-rale p-4 lg:px-10 mt-10 relative'>
              <img src='flying-dollar.png' className='absolute top-0 left-0  object-cover -z-50' />
            <div className='text-center '>
                <h4 >PRICING</h4>

                <h2>Choose the right plan for your business</h2>
                <h5 className='mt-3 '>Send invoices, collect payment, convert payouts to fiat currency, or keep the cryptocurrency</h5>



                
            </div>

            <div className='w-full px-2 mt-7 flex flex-col lg:flex-row flex-nowrap gap-6 items-center'>
              <Price1 />
              <Price2 />
              <Price3 />
            </div>
        </section>
    </>
  )
}

export default Pricing;



// bg-[#1A1C2C]