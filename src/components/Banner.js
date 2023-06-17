import React from 'react';
import Image from '../assets/img/house-banner.png'
import Search  from '../components/Search';
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-26'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px]
          font-semibold leading-none mb-6'><span className='text-violet-700'>Rent </span> or <span className='text-violet-700'>Buy </span> Your Dream House</h1>
        </div>
        <div className=' flex-1 lg:flex justify-start items-start'>
          <img src={Image} alt='banner'/>
        </div>
      </div>
      <Search/>
    </section>
  )
};

export default Banner;
