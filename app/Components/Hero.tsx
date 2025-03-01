import React from 'react'
import { Spotlight } from './Ui/Spotlight'
import { TextGenerateEffect } from './Ui/Text-generate'
import MagicButton from './Ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

function Hero() {
  return (
    <div className='pt-36 pb-20'>
      <div>
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] flex flex-col justify-center items-center md:max-w-2xl lg:max-w-[60vw]'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Believe in your flyness - <span className='text-yellow-300'>Kanye</span>
            </h2>
            <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className='text-white text-center md:tracking-wider text-sm md:text-lg lg:text-2xl mb-4'>
            Hi, I&apos;m Navin Venkat a full stack web developer based in India
          </p>
          <a href="https://drive.google.com/file/d/1qyW6j0rh2nRE7z8h_rW10QEg1Mg-8lNl/view?usp=drivesdk">+
            <MagicButton   
            title='Click for Resume'
            icon={<FaLocationArrow/>}
            position='right'
            />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero
