import { supabase } from "@/superbase";
import React, { useState } from "react";

interface SignUpProps {
  setSignInData: any;
  handleGoogle: (e: any) => void;
  setSignDisplay: any;
}

export default function SignUp({ handleGoogle, setSignDisplay }: SignUpProps) {
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
    
    function handleChange(event: any) {
      setSignUpData((prevFormData) => {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value,
        };
      });
    }

    async function handleSubmit(e: any) {
      e.preventDefault();
      try {
        const { data, error } = await supabase.auth.signUp({
          email: signUpData.email,
          password: signUpData.password,
          options: {
            data: {
              full_name: signUpData.fullname,
            },
          },
        });
        alert("Check your email for verification link");
      } catch (error) {
        alert(error);
      }
    }


   function setDisplay() {
     setSignDisplay((current: any) => !current);
   }

  return (
    <div className="flex flex-col gap-14 justify-evenly max-w-screen-sm font-bodyFont items-center border-sky-700 bg-black border py-10 mx-auto rounded-3xl">
      <h4 className="lg:text-4xl sm:text-2xl md:text-3xl sm:text-center md:text-left text-sky-700 tracking-wide font-headFont">
        SIGN UP
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-6 w-full">
        <input
          name="email"
          type="email"
          placeholder="Please enter your email"
          className="p-2 bg-zinc-800 text-white rounded-md"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-2 bg-zinc-800 text-white rounded-md"
          onChange={handleChange}
          minLength={6}
          required
        />

        <div className="flex flex-col w-full items-center gap-3">
          <button
            type="submit"
            className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-1 text-lg rounded-md hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen"
          >
            Sign Up
          </button>
          <button
            onClick={handleGoogle}
            className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-1 text-lg rounded-md hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen"
          >
            Sign Up using Google
          </button>
          <h4
            onClick={setDisplay}
            className="text-sm underline hover:text-todoColors-purple cursor-pointer transition-colors duration-200"
          >
            Sign In
          </h4>
        </div>
      </form>
    </div>
  );
}
