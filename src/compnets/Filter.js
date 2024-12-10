import React from 'react'



function Filter (props) {

 const FilterData = props.FilterData
 
    console.log(FilterData);
    return(
        <div className='w-11/12 flex flex-wrap  space-x-6 gap-y-4  max-auto py-4 justify-center'>
           {
            FilterData.map((data , index) => (
   
                <button className={`text-lg py-2 rounded-md font-medium 
                     text-white bg-black hover:bg-opacity-50 border-2 transition-all  duration-300 `}
 t
                    
                    key={index}>{data.title}</button>
                    
                ))
                    
                    
                   
            }
                    
       </div>
            
                

        
    
        
    
);
}

export default Filter;