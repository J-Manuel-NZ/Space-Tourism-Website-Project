import React from 'react'
import data from '../data.json'
import { useState } from 'react'

const crew_module = () => {
const crew = data.crew;
console.log(crew)
const [selectedCrew, setSelectedCrew] = useState('Douglas Hurley');
  return (
    <main className='text-white h-vh pt-24 md:pt-36 lg:pt-60 lg:p-60 lg:pb-0 flex flex-col items-center lg:items-start justify-stretch'>

      <h1 className='font-body tracking-[2.7px] md:pl-20 md:tracking-[4.7px] text-lg lg:text-3xl lg:mb-20' ><span className='text-white/50 font-bold'>02</span> MEET YOUR CREW</h1>

      {crew.map((crewMember) => {
        if (crewMember.name === selectedCrew) {
          return (
              <div className='flex flex-col md:flex-col-reverse lg:flex-row items-center lg:items-start md:p-12 md:py-0' key={crewMember.name}>
                    {/* Crew Image and Line */}
                  <img className=' px-28 pb-0 pt-12 md:px-0 md:absolute md:bottom-0 md:h-[60%] md:-z-10 lg:h-[75%] lg:pt-0 lg:pb-0 lg:right-[18%]' src={crewMember.images.webp} alt={crewMember.name} />
                  <div className='h-px bg-white/25 w-[80%] mt-0 md:hidden'></div>
                  {/* Div containing all other info */}
                  <div className='flex flex-col md:flex-col-reverse items-center lg:items-start p-6 lg:h-full'>
                    {/* Counter  */}
                      <ul className='flex space-x-8 mt-6 mb-9 lg:mb-6'>
                          {crewMember.name === 'Douglas Hurley'
                              ? <li className='cursor-pointer bullet-item bullet-item-active' onClick={() => setSelectedCrew('Douglas Hurley')}>&bull;</li>
                              : <li className='cursor-pointer bullet-item' onClick={() => setSelectedCrew('Douglas Hurley')}>&bull;</li>}

                          {crewMember.name === 'Mark Shuttleworth'
                              ? <li className='cursor-pointer bullet-item bullet-item-active' onClick={() => setSelectedCrew('Mark Shuttleworth')}>&bull;</li>
                              : <li className='cursor-pointer bullet-item' onClick={() => setSelectedCrew('Mark Shuttleworth')}>&bull;</li>}

                          {crewMember.name === 'Victor Glover'
                              ? <li className='cursor-pointer bullet-item bullet-item-active' onClick={() => setSelectedCrew('Victor Glover')}>&bull;</li>
                              : <li className='cursor-pointer bullet-item' onClick={() => setSelectedCrew('Victor Glover')}>&bull;</li>}

                          {crewMember.name === 'Anousheh Ansari'
                              ? <li className='cursor-pointer bullet-item bullet-item-active' onClick={() => setSelectedCrew('Anousheh Ansari')}>&bull;</li>
                              : <li className='cursor-pointer bullet-item' onClick={() => setSelectedCrew('Anousheh Ansari')}>&bull;</li>}
                      </ul>
                    {/* Crew Information */}
                      <div className='flex flex-col items-center lg:items-start'>
                          <h2 className='text-white/50 font-light md:text-2xl lg:text-[32px] font-heading md:mt-9 md:mb-3 lg:mb-6 '>{crewMember.role.toUpperCase()}</h2>
                          <h2 className='text-2xl md:text-4xl lg:text-[56px] font-heading mb-4 lg:mb-8 '>{crewMember.name.toUpperCase()}</h2>
                          <p className='text-center lg:text-start md:max-w-md md:text-lg lg:text-xl leading-6 font-body tracking-wider font-thin lg:font-light text-lightBlue lg:p-0'>{crewMember.bio}</p>
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

export default crew_module