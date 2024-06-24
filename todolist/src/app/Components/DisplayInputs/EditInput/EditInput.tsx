// To inform next js, this is a client component
"use client";

import { useShowEditDisplayFunction } from "@/app/Context/DisplayInputContext";
import { useEditFunctionInput, useEditIndexValue, useEditInputValue } from "@/app/Context/EditInputContext";
import React from "react";

export default function EditInput() {

   const editValue = useEditInputValue();
  const setEditValue = useEditFunctionInput();
  const editIndex = useEditIndexValue()
  const setEditShowDisplay = useShowEditDisplayFunction()

   const handleEditChange = (e: any) => {
     setEditValue({ ...editValue, task: e.target.value });
   };

   const handleSelectChange = (e: any) => {
     setEditValue({ ...editValue, progress: e.target.value });
  };
  
  function handleSubmitEdit(id: number) {
    fetch(`http://localhost:3005/api/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: editValue.task,
        progress: editValue.progress,
      }),
    }).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((err) => console.log(err));
    setEditShowDisplay(false)
    window.location.reload();
  }
  
  console.log("this is the index", editIndex)

  return (
    <form className=" md:max-w-screen-md relative lg:w-6/12 md:w-3/4 sm:w-11/12 sm:h-40 smUnique:h-36 flex flex-col justify-evenly items-center smUnique:mt-16 sm:mt-10 font-bodyFont mx-auto ">
      <div className="absolute bg-white opacity-35 z-0 w-full h-full rounded-2xl"></div>

      <input
        type="text"
        placeholder="Add your To-do Here...."
        value={editValue.task}
        className="w-11/12  lg:text-4xl sm:text-3xl cursor-text z-10 rounded-xl py-2 pl-3 text-black"
        onChange={handleEditChange}
      />

      <div className="flex sm:flex-col smUnique:flex-row gap-3 smUnique:h-10 w-11/12 z-10">
        <select
          onChange={handleSelectChange}
          className="text-black sm:w-full smUnique:w-1/2 cursor-pointer lg:text-3xl sm:text-2xl rounded-xl pl-2 "
        >
          <option
            value={editValue.progress}
            className="text-gray-300"
            selected
            disabled
            hidden
          >
          {editValue.progress}
          </option>
          <option value="incomplete">Incomplete</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>

        <button onClick={() => handleSubmitEdit(editIndex)} className="sm:w-full smUnique:w-1/2 003554 cursor-pointer font-bodyFont z-10 border-white bg-todoColors-darkBlue border-2 text-xl rounded-2xl hover:bg-sky-700 transition-colors duration-300 active:bg-todoColors-correctGreen">
          DONE
        </button>
      </div>
    </form>
  );
}
