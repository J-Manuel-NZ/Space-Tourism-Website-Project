import React from 'react'
import data from '../data.json'
import { useState } from 'react'

const Destination_page = () => {
  const destinationData = data.destinations;
  const [selectedDestination, setSelectedDestination] = useState(destinationData[0].name)

  console.log(data)

  return (
    <main className='text-white pt-24 md:pt-36 lg:pt-60 lg:p-60 lg:pb-0 flex flex-col items-center md:items-start'>

      <h1 className='font-body tracking-[2.7px] md:pl-20 md:tracking-[4.7px] text-lg lg:text-3xl lg:mb-20' ><span className='text-white/50 font-bold'>01</span> PICK YOUR DESTINATION</h1>

      {destinationData.map((destination) => {
        if (destination.name === selectedDestination) {
          return (
            <div className='flex flex-col lg:flex-row items-center md:p-12 md:pt-0' key={destination.name}>
              <img className=' px-24 py-6 md:px-36 md:py-12 lg:pt-0 lg:h-full lg:pb-0 lg:w-1/2' src={destination.images.webp} />
              <div className='flex flex-col items-center p-6 lg:items-start lg:w-1/2 lg:px-36 lg:h-full'>
                <ul className='flex space-x-8 lg:mb-6'>
                  {destination.name === 'Moon'
                    ? <li className='cursor-pointer nav-item nav-item-active' onClick={() => setSelectedDestination('Moon')}>MOON</li>
                    : <li className='cursor-pointer nav-item' onClick={() => setSelectedDestination('Moon')}>MOON</li>}

                  {destination.name === 'Mars'
                    ? <li className='cursor-pointer nav-item nav-item-active' onClick={() => setSelectedDestination('Mars')}>MARS</li>
                    : <li className='cursor-pointer nav-item' onClick={() => setSelectedDestination('Mars')}>MARS</li>}

                  {destination.name === 'Europa'
                    ? <li className='cursor-pointer nav-item nav-item-active' onClick={() => setSelectedDestination('Europa')}>EUROPA</li>
                    : <li className='cursor-pointer nav-item' onClick={() => setSelectedDestination('Europa')}>EUROPA</li>}

                  {destination.name === 'Titan'
                    ? <li className='cursor-pointer nav-item nav-item-active' onClick={() => setSelectedDestination('Titan')}>TITAN</li>
                    : <li className='cursor-pointer nav-item' onClick={() => setSelectedDestination('Titan')}>TITAN</li>}
                </ul>

                <h2 className='text-6xl md:text-[80px] lg:text-[100px] font-heading mb-2 mt-4 md:mt-9 '>{destination.name.toUpperCase()}</h2>
                <p className='text-center lg:text-start font-body tracking-wider font-thin lg:font-light text-lightBlue md:p-6 lg:p-0'>{destination.description}</p>
                <div className='h-px bg-white/25 w-full my-6'></div>
                <div className='flex flex-col items-center md:flex-row md:justify-around lg:justify-start md:w-full md:px-12 lg:px-0'>
                  <div className='flex flex-col items-center my-3 lg:items-start lg:mr-6'>
                    <h3 className='text-lightBlue text-sm font-body tracking-[2.36px]'>AVG. DISTANCE</h3>
                    <p className='text-3xl font-light font-heading p-3 lg:pl-0'>{destination.distance.toUpperCase()}</p>
                  </div>
                  <div className='flex flex-col items-center my-3 lg:items-start lg:mr-6'>
                    <h3 className='text-lightBlue text-sm font-body tracking-[2.36px]'>EST. TRAVEL TIME</h3>
                    <p className='text-3xl font-light font-heading p-3 lg:pl-0'>{destination.travel.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
    )}
    </main>
  )
}

export default Destination_page