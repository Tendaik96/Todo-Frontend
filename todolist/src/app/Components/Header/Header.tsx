import React from 'react' 
import { alumni } from '@/app/layout';



export default function Header() {
  return (
    <div className="bg-todoColors-darkBlue rounded-b-3xl border-4 border-white pl-14 py-10 select-none">
      <h1 className={"text-5xl text-white tracking-wide font-headFont"}>
        {" "}
        Good Morning, Friend!{" "}
      </h1>
      <h3 className={"text-4xl text-white pt-2 font-bodyFont"}>
        Here are all your tasks...
      </h3>
    </div>
  );
}
