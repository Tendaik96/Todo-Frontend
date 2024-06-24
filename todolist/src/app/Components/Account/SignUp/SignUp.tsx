import React from 'react'

export default function SignUp() {
    return (
        <div className="flex flex-col gap-14 justify-evenly max-w-screen-sm font-bodyFont items-center border-sky-700 bg-black border py-10 mx-auto rounded-3xl">
            <h4 className="lg:text-4xl sm:text-2xl md:text-3xl sm:text-center md:text-left text-sky-700 tracking-wide font-headFont">
                SIGN UP
            </h4>
            <div className="flex flex-col gap-8 px-6 w-full">
                <input
                    type="text"
                    value={""}
                    placeholder="Please enter your email"
                    className="px-3"
                />
                <input type="text" value={""} placeholder="******" className="px-3" />
            </div>
            <div className="flex flex-col w-full items-center gap-3">
                <button className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-1 text-xl rounded-2xl hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen">
                    Sign up
                </button>
                <button className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-1 text-xl rounded-2xl hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen">
                    Sign up with Google
                </button>
                <h4 className="text-sm underline hover:text-todoColors-purple cursor-pointer transition-colors duration-200">
                    Sign Up
                </h4>
            </div>
        </div>
    );
}
