import React from 'react'

interface SignInProps {
  setSignInData: any;
  handleSignIn: (e: any) => void;
  handleGoogle: (e: any) => void;
  setSignDisplay: any;
}

export default function SignIn({ setSignInData, handleSignIn, handleGoogle, setSignDisplay }: SignInProps) {
  
  function handleChange(event: any) {
    setSignInData((prevFormData: object) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function setDisplay() {
    setSignDisplay((current:any) => !current);
  }
  

  return (
    <div className="flex flex-col gap-14 justify-evenly max-w-screen-sm font-bodyFont items-center border-sky-700 bg-black border py-10 mx-auto rounded-3xl">
      <h4 className="lg:text-4xl sm:text-2xl md:text-3xl sm:text-center md:text-left text-sky-700 tracking-wide font-headFont">
        SIGN IN
      </h4>
      <form onSubmit={handleSignIn} className="flex flex-col gap-8 px-6 w-full">
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
            Sign In
          </button>
          <button
            onClick={handleGoogle}
            className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-1 text-lg rounded-md hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen"
          >
            Sign in using Google
          </button>
          <h4
            onClick={setDisplay}
            className="text-sm underline hover:text-todoColors-purple cursor-pointer transition-colors duration-200"
          >
            Sign Up
          </h4>
        </div>
      </form>
    </div>
  );
}
