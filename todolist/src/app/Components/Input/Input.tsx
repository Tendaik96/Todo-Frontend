// To inform next js, this is a client component
"use client";

import {
  useStatusFunction,
  useSelectFunction,
  useSelectValue,
  useTodoFunctionInput,
  useTodoInputValue,
  useTodoItemFunctionInput,
  useTodoItemInputValue,
} from "@/app/Context/InputContext";
import React, { useEffect, useState } from "react";

export default function Input() {
  const todo = useTodoInputValue();
  const setTodo = useTodoFunctionInput();
  const select = useSelectValue();
  const setSelect = useSelectFunction();
  const setTodoItemList = useTodoItemFunctionInput();
  const todoItemList = useTodoItemInputValue();
  const setColor = useStatusFunction();

  function handleChange(e: any) {
    setTodo(e.target.value);
    //  console.log(e.target.value);
  }

  console.log(todo);

  function selectValue(e: any) {
    setSelect(e.target.value);
    console.log(e.target.value);
  }

  function handleInputData() {
    if (select && todo) {
      setTodoItemList([
        ...todoItemList,
        {
          task: todo,
          progress: select,
        },
      ]);

      setSelect("");
      setTodo("");
    }

  }

  /* if (item.progress === "in progress") {
          setBgColour("bg-todoColors-purple");
        } else if (item.progress === "incomplete") {
          setBgColour("bg-red-600");
        } else {
          setBgColour("bg-red-600");
        } */

  return (
    <div className=" relative w-6/12 h-36 flex flex-col justify-evenly items-center mt-20 font-bodyFont mx-auto ">
      <div className="absolute bg-white opacity-35 z-0 w-full h-full rounded-2xl"></div>

      <input
        type="text"
        placeholder="Add your To-do Here...."
        value={todo}
        className="w-11/12  text-4xl cursor-text z-10 rounded-xl py-2 pl-3 text-black"
        onChange={handleChange}
      />

      <div
        className="flex flex-row gap-3 h-10 w-11/12 z-10"
        onChange={selectValue}
      >
        <select className="text-black w-1/2 cursor-pointer text-3xl rounded-xl pl-2 ">
          <option
            value=""
            className="text-gray-300"
            selected
            disabled
            hidden
          >
            Select an Option{" "}
          </option>
          <option value="incomplete">Incomplete</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>

        <button
          onClick={handleInputData}
          className="w-1/2 003554 cursor-pointer z-10 border-white bg-todoColors-darkBlue border-2 text-xl rounded-2xl hover:bg-sky-700 active:bg-todoColors-correctGreen"
        >
          &#10010;
        </button>
      </div>
    </div>
  );
}
