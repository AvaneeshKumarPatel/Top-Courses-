import React from 'react'



function Filter (props) {

 const FilterData = props.FilterData
 
    console.log(FilterData);
    return(
        <div>
           {
            FilterData.map((data , index) => (
   
                <button key={index}>{data.title}</button>

            ))
        
    
           }
        
    
       </div>
);
}

export default Filter;