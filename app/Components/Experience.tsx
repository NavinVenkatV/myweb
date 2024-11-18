import React from 'react'
import { workExperience } from '../data'
import { Button } from './Ui/Movingborder'

function Experience() {
  return (
    <div className='text-white py-20 text-3xl md:text-4xl lg:text-5xl text-center font-bold' id='experience'>
      <h1 className='items-center'>My {' '} <span className='text-purple'>Work Experience</span></h1>
      <div className='grid w-full mt-12 lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((exp)=>(
            <Button 
            key={exp.id}
            borderRadius='1.75rem'
            className=''
            >
                <div className='flex lg:flex-row flex-col gap-2 lg:items-center p-3 py-6 md:p-5 lg:p-10'>
                    <img src={exp.thumbnail} alt={exp.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl  md:text-2xl font-bold'>{exp.title}</h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>{exp.desc}</p>
                    </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience