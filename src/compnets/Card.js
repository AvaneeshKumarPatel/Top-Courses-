import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export const Card = (props) => {
  let course = props.course;
  //  console.log(course,"getting from prop")
  //  console.log(course.image.url)
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;

  function ClickHandler() {
    // // logic
    // if (likedCourses.includes(course.id)) {
    //   // toh pahle se like hua pada hai
    //   setlikedCourses((prev) => prev.filter((cid) => cid !== course.id));
    // } else {
    //   // pahle se like hua pada hai ye course
    //   // insert karna h ye course liked course me

    //   if (likedCourses.length === 0) {
    //     setlikedCourses([course.id]);
    //   } else {
    //     // non-empty phle se
    //     setlikedCourses((prv) => [...prv, course.id]);
    //   }
    //   toast.success("Liked Sucessfully");
    };

    return (
      <div className="w-[300px]  bg-gray-700 rounded-md  bg-opacity-80  overflow-hidden">
        <div className="relative"> 

        <div className=""></div>

        <img src={course.image.url} />

        <div className="w-[40px] h-[40px]  bg-white   rounded-full absolute right-2 bottom-3  grid place-items-center">
          <button onClick={ClickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem " />
            )}
          </button>

      </div>

        </div>

        <div className="p-4">
          <p className="text-white font-semibold text-lg leading-6">
            {course.title}
          </p>
          <p className="mt-2 text-white  ">{course.description}</p>
        </div>
      </div>
    );
  }
