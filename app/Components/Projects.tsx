import React from 'react'
import { projects } from '../data'
import { PinContainer } from './Ui/3dPin'

const Projects = () => {
  return (
    <div className='py-20'>
        <div className='text-white py-20 text-3xl md:text-4xl lg:text-5xl text-center font-bold' id='projects'>
             A small selection of {' '} <span className='text-purple'>recent Projects</span>
        </div>

        <div className='flex flex-wrap items-center justify-center p-4 gap-12 mt-10 text-white '>
            {projects.map(({title,id,des,link,img,iconLists})=>(
                <div key={id} className='h-[25rem] lg:min-h-[30rem] flex items-center justify-center sm:w-96 w-[80vw] '>
                     <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  {/* <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                </div>
              </div>
            </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
