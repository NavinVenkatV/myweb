import React from 'react'
import { BentoGrid, BentoGridItem } from './Ui/Bento-grid'
import { gridItems } from '../data'

function Grid() {
  return (
    <section>
        <BentoGrid
        className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto mb-10'>
            {gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg})=>(
                <BentoGridItem
                title={title}
                description={description}
                id={id}
                key={id}
                className={className}
                img = {img}
                imgClassName = {imgClassName}
                titleClassName = {titleClassName}
                spareImg = {spareImg}  
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
