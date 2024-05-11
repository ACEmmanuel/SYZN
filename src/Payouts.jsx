import React from 'react'
import Card from './Card'

const Benefits = () => {
  return (
    <>
        <section className='container mx-auto text-white/90 font-rale p-4  mt-10 relative'>
            {/* <img src='flying-dollar.png' className='absolute top-0 left-0 object-contain' /> */}
            {/* <img src='laptop2.png' className='absolute top-0 left-0 object-contain' /> */}

              <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center gap-4'>

                <div className='text-center lg:text-left max-w-xl mx-auto'>
                  <h4 >PAYOUTS</h4>
                  <h2 className='lg:pr-8'>Receive your payments in crypto currencies</h2>
                  <div className='px-2 mt-16'>
                    <img src='bitcoin.png' className='mx-auto bg-no-repeat bg-cover rounded-[1.3rem]'/>
                  </div>

                </div>

                <div className='w-full mt-6'>
                  <h5 className='mt-3 text-center lg:text-left px-6'>Send invoices, collect payment, convert payouts to fiat currency, or keep the cryptocurrency</h5>

                  <Card /> 

                </div>
              </div>

        </section>
    </>
  )
}

export default Benefits