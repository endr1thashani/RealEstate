import React from 'react';

import {housesData} from '../data'

import {useParams} from 'react-router-dom'

import {BiBed , BiBath , BiArea} from 'react-icons/bi'

import {link} from 'react-router-dom'

const PropertyDetails = () => {

  const {id} = useParams()

  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })
  return(
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4 '>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
          <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'>{house.price}€</div>
        </div>
        <div>
          <div>
            <div>
              <img src={house.image} alt='house image'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;