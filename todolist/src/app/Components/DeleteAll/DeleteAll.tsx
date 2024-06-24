// To inform next js, this is a client component
"use client";
import { useTodoItemInputValue } from "@/app/Context/InputContext";
import React from "react";

export default function DeleteAll() {
  const todolist = useTodoItemInputValue();
  
  function handleDeleteAllTodos() {
    let answer = confirm("Are You sure you want to delete all tasks?");

    if(answer){
    fetch(`http://localhost:3005/api/deletealltodos`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Oops! Something went wrong");
        }
        window.location.reload();
        //assume things went well
      })
      .catch((error: any) => {
        console.log(error);
      });}
  }

  //console.log(todolist)

    let displayDeleteAll;
    if (todolist.length !== 0) {
      displayDeleteAll = (
        <h6
          onClick={handleDeleteAllTodos}
          className="text-lg text-red-900 underline underline-offset-4 cursor-pointer hover:text-red-600 transition-colors duration-300 max-w-fit mx-auto"
        >
          {" "}
          Delete all Tasks{" "}
        </h6>
      );
    } else {
      displayDeleteAll = <></>;
    }
    return (
    <>
     {displayDeleteAll}       
    </>
    
  );
}
