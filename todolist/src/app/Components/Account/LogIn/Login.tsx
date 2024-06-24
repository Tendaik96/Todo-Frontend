import React from 'react'

export default function Login() {
  return (
    <div className="flex flex-col gap-14 justify-evenly max-w-screen-sm font-bodyFont items-center border-sky-700 bg-black border py-10 mx-auto rounded-3xl">
      <h4 className="lg:text-4xl sm:text-2xl md:text-3xl sm:text-center md:text-left text-sky-700 tracking-wide font-headFont">
        SIGN IN
      </h4>
      <div className="flex flex-col gap-8 px-6 w-full">
        <input
          type="text"
          value={""}
          placeholder="Please enter your email"
          className="p-2 bg-zinc-800 text-white rounded-md"
        />
        <input
          type="text"
          value={""}
          placeholder="******"
          className="p-2 bg-zinc-800 text-white rounded-md"
        />
      </div>
      <div className="flex flex-col w-full items-center gap-3">
        <button className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-1 text-lg rounded-md hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen">
          Sign In
        </button>
        <button className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-1 text-lg rounded-md hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen">
          Sign in using Google
        </button>
        <h4 className="text-sm underline hover:text-todoColors-purple cursor-pointer transition-colors duration-200">
          Sign Up
        </h4>
      </div>
    </div>
  );
}
