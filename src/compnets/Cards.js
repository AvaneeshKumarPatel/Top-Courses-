import React from 'react'
import { Card } from './Card';



 function Cards (props) {

    let  Courses = props.Courses;
     
  ///console.log( 'Cards data here',Object.values(Courses));

  function getCourses() {
   let allCourses = [];
        Object.values(Courses).forEach( array => {
            array.forEach((coursesData) => {
            allCourses.push(coursesData);
            })
        })
        return allCourses;
    }
    

return (
   <div>    
       {

        getCourses().map(  (course)  => (
         <Card key={course.id} course={course} />

        ))
       }

</div>
  )
}


export default Cards