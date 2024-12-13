import React from 'react'



function Filter (props) {

 const FilterData  = props.FilterData;
 const setCategory = props.setCategory;
 const category    = props.category;
 
    console.log(FilterData);

    function  filterHandler(title) {
        setCategory(title);
    }

    return(
        <div className='w-11/12 flex flex-wrap  space-x-6 gap-y-4  max-auto py-4 justify-center'>
           {
            FilterData.map((data , index) => (
   
                <button className={`text-lg py-2 rounded-md font-medium 
                     text-white bg-black hover:bg-opacity-50 border-2 transition-all  duration-300
                     
                    ${category === data.title ? 
                    "bg-opacity-60 border-white" :
                    "bg-opacity-40 border-transparent" }
                       
                     `}
                     key={index}
                     onClick={()=> filterHandler(data.title)}
                     >{data.title} </button>

                    
                    
                ))
                    
                    
                   
            }
                    
       </div>
            
                

        
    
        
    
);
}

export default Filter;