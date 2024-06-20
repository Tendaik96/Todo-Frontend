import React from 'react'

export default function Input() {
  return (
    <div className=" relative w-6/12 h-36 flex flex-col justify-evenly items-center mt-20 font-bodyFont mx-auto ">
      <div className="absolute bg-white opacity-35 z-0 w-full h-full rounded-2xl"></div>
      <input
        type="search"
        placeholder="Add your To-do Here...."
        value=""
        className="w-11/12  text-4xl cursor-text z-10 rounded-xl p-2"
      />

      <div className="flex flex-row gap-3 h-10 w-11/12 z-10">
        <select className="text-black w-1/2 cursor-pointer text-3xl rounded-xl pl-2">
          <option value="incomplete">Incomplete</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>

        <button className="w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-2 text-xl rounded-2xl hover:bg-sky-700">
          &#10010;
        </button>
      </div>
    </div>
  );
}
