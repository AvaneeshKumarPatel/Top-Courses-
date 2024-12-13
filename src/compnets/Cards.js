import React, { useState } from 'react'
import { Card } from './Card';



 function Cards (props) {
       
    let  Courses = props.Courses;
     let category = props.category;
     const[likedCourses, setlikedCourses] = useState([]);
  ///console.log( 'Cards data here',Object.values(Courses));

  function getCourses() {
   // if(category === "All"){
   let allCourses = [];
        Object.values(Courses).forEach( array => {
            array.forEach((coursesData) => {
            allCourses.push(coursesData);
            });
        });
        return allCourses;
     // }
     // else{
      //  return Courses[category];
     // }
    
      }

    

return (
   <div className='flex flex-wrap justify-center gap-4 mb-4'>    
       {

        getCourses().map((course)  => (
         <Card key={course.id} 
         course={course} 
         likedCourses={likedCourses}
         setlikedCourses={setlikedCourses}/>


        ))
       }

</div>
  )
}


export default Cards