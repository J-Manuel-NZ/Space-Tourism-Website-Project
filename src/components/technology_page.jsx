import React from 'react'
import data from '../data.json'
import { useState } from 'react'

const Technology_page = () => {
  const technology = data.technology;
const [selectedTech, setSelectedTech] = useState(technology[0].name);
  return (
    <main className='text-white h-vh pt-24 md:pt-36 lg:pt-60 lg:pb-0 flex flex-col items-center md:items-start justify-stretch'>

      <h1 className='font-body tracking-[2.7px] md:pl-20 lg:pl-52 md:tracking-[4.7px] text-lg md:text-xl lg:text-3xl lg:mb-20' ><span className='text-white/50 font-bold'>03</span> SPACE LAUNCH 101</h1>

      {technology.map((tech) => {
        if (tech.name === selectedTech) {
          return (
              <div className='flex flex-col w-full lg:flex-row-reverse items-center lg:pl-52  lg:items-start lg:justify-between md:py-0' key={tech.name}>
                    {/* Technology Image */}
              <div className='hidden lg:flex right-0 ml-3 -mt-10'>
                <img src={tech.images.portrait} alt={tech.name} />
              </div>
                  <img className='lg:hidden w-full h-auto object-cover my-9' src={tech.images.landscape} alt={tech.name} /> 

                  {/* Div containing all other info */}
                  <div className='flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-0 py-0 lg:h-full'>
                    {/* Counter  */}
                      <ul className='flex space-x-8 lg:space-x-0 lg:space-y-8  lg:mb-6 lg:flex-col items-center lg:items-start lg:pr-20 '>
                          {tech.name === technology[0].name
                              ? <li className='cursor-pointer numberNav-item numberNav-item-active' onClick={() => setSelectedTech(technology[0].name)}>1</li>
                              : <li className='cursor-pointer numberNav-item' onClick={() => setSelectedTech(technology[0].name)}>1</li>}

                          {tech.name === technology[1].name
                              ? <li className='cursor-pointer numberNav-item numberNav-item-active' onClick={() => setSelectedTech(technology[1].name)}>2</li>
                              : <li className='cursor-pointer numberNav-item' onClick={() => setSelectedTech(technology[1].name)}>2</li>}

                          {tech.name === technology[2].name
                              ? <li className='cursor-pointer numberNav-item numberNav-item-active' onClick={() => setSelectedTech(technology[2].name)}>3</li>
                              : <li className='cursor-pointer numberNav-item' onClick={() => setSelectedTech(technology[2].name)}>3</li>}
                      </ul>
                    {/* Technology Information */}
                      <div className='flex flex-col items-center py-6 md:py-0 lg:items-start lg:py-0'>
                          <h2 className='text-lightBlue font-light tracking-[2.37px] text-sm md:text-base font-body md:mt-9 lg:mt-0 md:mb-3 lg:mb-6 '>THE TERMINOLOGY...</h2>
                          <h2 className='text-2xl md:text-[40px] lg:text-[56px] font-heading leading-[64px] mb-4 md:mb-6 lg:mb-8 '>{tech.name.toUpperCase()}</h2>
                          <p className='text-center lg:text-start md:max-w-md md:text-lg leading-6 md:leading-8 font-body tracking-wider font-thin lg:font-light text-lightBlue lg:p-0'>{tech.description}</p>
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

export default Technology_page