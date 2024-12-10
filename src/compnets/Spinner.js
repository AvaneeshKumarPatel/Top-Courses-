import React from 'react'
import  css from './Spinner.css';

export default function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'>
           <div className='Spinner'></div>
           <p className=' text-lg font-semibold  text-white '>Loading...</p>
          
        
    
    </div>
  )
}
