"use client";
import React, { useEffect, useState } from "react";
import SignIn from "./SignIn/SignIn";
import { Provider, Session, User, WeakPassword } from "@supabase/supabase-js";

import { redirect } from "next/navigation";
import { supabase } from "@/superbase";
import SignUp from "./SignUp/SignUp";


interface Token {
  user: User;
  session: Session;
  weakPassword?: WeakPassword | undefined;
}

interface GoogleLog {
  /*  */
  provider: Provider;
  url: string;
}
interface googleUser {
  user: User | null;
}

export default function Account() {

  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [authDisplay, setAuthDisplay] = useState(false);
  const [token, setToken] = useState< Token | GoogleLog | googleUser | undefined >();
  const [loading, setLoading] = useState(true);
  const [signDisplay, setSignDisplay] = useState(false)

  async function handleSignIn(e: any) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: signInData.email,
        password: signInData.password,
      });

      if (error) throw error;
      setToken(data);
      setAuthDisplay(true);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("authenticated", JSON.stringify(authDisplay));
    }

    if (sessionStorage.getItem("token")) {
      let session: any = sessionStorage.getItem("token");
      let data = JSON.parse(session);
      setToken(data);
    }
  }, [authDisplay]);

  async function handleGoogle(e: any) {
    e.preventDefault();
    try {
      //To initiate sign in, you can use the signInWithOAuth() method.
      /* This call takes the user to Google's consent screen. When the flow ends, the user's profile information is exchanged and validated with Supabase Auth before it redirects back to your web application with an access and refresh token representing the user's session. */
      supabase.auth.signInWithOAuth({
        provider: "google",
      });

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (error) throw error;
      setToken(data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function getUserData() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          const googleLogData: googleUser = { user: user };
          setToken(googleLogData);
          setAuthDisplay(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    getUserData();

    supabase.auth.onAuthStateChange(async (event: any) => {
      if (event === "SIGNED_IN") {
        setAuthDisplay(true);
      } else if (event === "SIGNED_OUT") {
        
        setAuthDisplay(false);
        redirect("/");
      }
    });
  }, []);

  console.log(signInData)

  return (
    <>
      {signDisplay ? (
        <SignUp
          setSignInData={setSignInData}
          handleSignIn={handleSignIn}
          handleGoogle={handleGoogle}
          setSignDisplay={setSignDisplay}
        />
      ) : (
        <SignIn
          setSignInData={setSignInData}
          handleSignIn={handleSignIn}
          handleGoogle={handleGoogle}
          setSignDisplay={setSignDisplay}
        />
      )}
    </>
  );
}
