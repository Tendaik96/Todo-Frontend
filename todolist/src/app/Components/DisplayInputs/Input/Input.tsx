// To inform next js, this is a client component
"use client";

import {
  useSelectFunction,
  useSelectValue,
  useTodoFunctionInput,
  useTodoInputValue,
  useTodoItemFunctionInput,
} from "@/app/Context/InputContext";
import React, { useEffect } from "react";

export default function Input() {
  const todo = useTodoInputValue();
  const setTodo = useTodoFunctionInput();
  const select = useSelectValue();
  const setSelect = useSelectFunction();
  const setTodoItemList = useTodoItemFunctionInput();

  function handleChange(e: any) {
    setTodo(e.target.value);
    //  console.log(e.target.value);
  }

  function selectValue(e: any) {
    setSelect(e.target.value);
    //console.log(e.target.value);
  }

  useEffect(() => {
    //get All todos
    fetch("http://localhost:3005/api/alltodos")
      .then((res) => res.json())
      .then((data) => {
        //console.log("all todo", data)
        setTodoItemList(data.payload);
      });
  }, []);
 

  function handleInputData() {
    if (select && todo) {
      /* setTodoItemList([
        ...todoItemList,
        {
          task: todo,
          progress: select,
        },
      ]); */

      // adding items to the database
      fetch("http://localhost:3005/api/createtodo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: todo,
        progress: select,
      }),
    }).then(() => console.log("new task added"));

      setSelect("");
      setTodo("");

       window.location.reload();
    } else {
      alert("Please ensure you have entered a tasked and entered a current status")
    }

  }

  return (
    <>
      {<div className=" md:max-w-screen-md relative lg:w-6/12 md:w-3/4 sm:w-11/12 sm:h-40 smUnique:h-36 flex flex-col justify-evenly items-center smUnique:mt-16 sm:mt-10 font-bodyFont mx-auto ">
        <div className="absolute bg-white opacity-35 z-0 w-full h-full rounded-2xl"></div>

        <input
          type="text"
          placeholder="Add your To-do Here...."
          value={todo}
          className="w-11/12  lg:text-4xl sm:text-3xl cursor-text z-10 rounded-xl py-2 pl-3 text-black"
          onChange={handleChange}
        />

        <div
          className="flex sm:flex-col smUnique:flex-row gap-3 smUnique:h-10 w-11/12 z-10"
          onChange={selectValue}
        >
          <select className="text-black sm:w-full smUnique:w-1/2 cursor-pointer lg:text-3xl sm:text-2xl rounded-xl pl-2 ">
            <option value="" className="text-gray-300" selected disabled hidden>
              Select an Option{" "}
            </option>
            <option value="incomplete">Incomplete</option>
            <option value="in progress">In Progress</option>
            <option value="complete">Complete</option>
          </select>

          <button
            onClick={handleInputData}
            className="sm:w-full smUnique:w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-2 text-xl rounded-2xl hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen"
          >
            &#10010;
          </button>
        </div>
      </div>}
    </>
  );
}
