import React from 'react' 
import { alumni } from '@/app/layout';



export default function Header() {

  let currentDate = new Date();
  let currentTime = currentDate.toLocaleTimeString();
  console.log(currentTime)

  let greeting;

  if (currentTime > "00:00:00" && currentTime < "11:59:59") {
    greeting = "Good Morning, Friend"
  } else if (currentTime > "12:00:00" && currentTime < "17:59:59") {
     greeting = "Good Afternoon, Friend";
  } else {
    greeting = "Good Evening, Friend";
  }


    return (
      <div className="bg-todoColors-darkBlue rounded-b-3xl border-4 border-white md:pl-14 md:py-8 sm:py-6 sm:pl-0 sm:mx-auto select-none">
        <h1
          className={
            "lg:text-5xl sm:text-3xl md:text-4xl sm:text-center md:text-left text-white tracking-wide font-headFont"
          }
        >
          {greeting}
        </h1>
        <h3
          className={
            "lg:text-4xl sm:text-2xl md:text-3xl sm:text-center md:text-left text-white pt-2 font-bodyFont"
          }
        >
          Here are all your tasks...
        </h3>
      </div>
    );
}
