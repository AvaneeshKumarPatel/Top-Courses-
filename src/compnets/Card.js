import React from 'react'
import {FcLike} from 'react-icons/fc'

export const Card = (props) => {

  let course = props.course;

  return (
    <div className='w-[300px]  bg-gray-700 rounded-md  bg-opacity-80  overflow-hidden'>
       
         <div className='relative'>  

         <div className=''>

        <img src={course.image.url}/>

           </div>

<div className='w-[40px] h-[40px] absolute bg-white   rounded-full absolute right-2 bottom-3  grid place-items-center'>
  <button>
    <FcLike fontSize='1.75rem'/>
  </button>

</div>

<div className='p-4'>
<p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
<p className='mt-2 text-white  '>{course.description}</p>

</div>
         </div>

         
    </div>
  )
};


