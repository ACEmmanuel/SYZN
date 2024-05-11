import React from 'react'

const Start = () => {
  return (
    <>
         <section className='container mx-auto text-white/90 font-rale p-4 mt-10 relative lg:px-16'>
            <img src='flying-dollar.png' className='absolute inset-0 ' />

            <div className='mx-auto relative text-white/90 mt-8 bg-[#1A1C2C] text-white rounded-3xl px-3 py-10 lg:px-20 flex flex-col gap items-center text-center'>
              <div className='text-3xl sm:text-4xl font-medium lg:max-w-[70%] relative star'>
                  <span className='font-[700] font-rale'>
                    Get started to accept <br /> crypto payments
                  </span>
                  <p className='text-[16px] md:text-[18px] font-medium mt-4 text-gray-400 font-DM'>Receive payments from anyone, anywhere</p>
              </div>


              <button className='bttn mx-auto mt-6 font-rale'>Get started</button>

              <img src='./sparkle.png' className='absolute size-[1rem] left-5 top-5'/>
            </div>

        </section>
    </>
  )
}

export default Start