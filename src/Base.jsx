import React from 'react'

const Base = () => {
  return (
    <>
        <section className='container mx-auto text-white/90 font-rale p-4 lg:px-10 mt-10 '>
            <div className='flex flex-col lg:flex-row flex-nowrap gap-6'>


                <div className='base'>
                    <p className='base-head'>300+</p>
                    <p className='base-body'>BRANDS WITH US</p>
                </div>

                <div className='base'>
                    <p className='base-head'>30+</p>
                    <p className='base-body'>SUPPORTED COUNTRIES</p>
                </div>

                <div className='base'>
                    <p className='base-head'>200K+</p>
                    <p className='base-body'>ONLINE STORES</p>
                </div>


            </div>
        </section>
    </>
  )
}

export default Base