import React from 'react'

const Invoices = () => {
  return (
    <>
        <section className='container mx-auto text-white/90 font-rale p-4 lg:px-10 mt-10 relative'>
            <div className='flex flex-col lg:flex-row '>  
                <div className='text-center lg:text-left'>
                    <h4 >INVOICES</h4>

                    <h2>Bill crypto to your customers</h2>
                    <h5 className='mt-3 '>With powerful tools for crypto payments, you can grow your business</h5>

                    
                    <div className='mt-10 flex flex-col lg:flex-row gap-x-14 gap-y-8'>
                    <div className='space-y-6'>
                        <h1 className='font-DM font-[500] text-[3rem] lg:text-[3.6rem] text-[#2CBCA5]'>1.5%</h1>
                        <p className='font-inter text-[18px]'>Payment fee</p>
                    </div>

                    <div className='space-y-6'>
                        <h1 className='font-DM font-[500] text-[3rem] lg:text-[3.6rem] text-[#2CBCA5]'>50+</h1>
                        <p className='font-inter text-[18px]'>Cryptocurrencies</p>
                    </div>
                    </div> 

                    
                </div>

                <div className='max-w-xl px-2 mt-7 relative'>
                    <img src='dollarf.png' className='absolute top-0 left-0  object-contain' />
                    <img src='stat.png' className='mx-auto bg-no-repeat bg-cover rounded-[1.3rem]'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Invoices