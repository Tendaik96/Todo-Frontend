"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTodoItemInputValue } from "@/app/Context/InputContext";
import {
  useEditFunctionInput,
  useEditIndexFunction,
  useEditInputValue,
} from "@/app/Context/EditInputContext";
import { useShowEditDisplayFunction } from "@/app/Context/DisplayInputContext";

export default function TodoItem() {

  const todoItemList = useTodoItemInputValue();
  const editFunction = useEditFunctionInput();
  const editValue = useEditInputValue();
  const setIndex = useEditIndexFunction()
  const setEditShowDisplay = useShowEditDisplayFunction();

 /*  useEffect(() => {
    console.log(todoItemList);
  }, [todoItemList]); */

  const colorList: string[] = []

  function EditTodo(id: number) {
    fetch(`http://localhost:3005/api/todo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("click", data.payload);
        editFunction({
          ...editValue,
          task: data.payload.task,
          progress: data.payload.progress,
        });
        //editFunction({...editValue, task: data.payload.task, progress: data.payload.progress})
        console.log(editValue);
      })
      .catch((err) => console.log(err));
    
    // edit form displays instead of the new todo input form
    setEditShowDisplay(true)
    //setting the item id that will be edited so that the 
     setIndex(id);
  }
  

  function deleteTodo(id: number) {
          fetch(`http://localhost:3005/api/deletetodo/${id}`, {
            method: "DELETE"
          })
            .then((response) => {
              if (!response.ok) {
              throw new Error("Oops! Something went wrong")
              }
              window.location.reload();
              //assume things went well
            }).catch((error: any) => {
            console.log(error)
          })
        }

  return (
    <div className="pb-10">
      {todoItemList.map((item: any, index: number) => {
        if (item.progress === "in progress") {
          colorList.push("bg-todoColors-purple");
        } else if (item.progress === "incomplete") {
          colorList.push("bg-red-600");
        } else {
          colorList.push("bg-todoColors-correctGreen");
        }

       

        return (
          <>
            <div
              key={item.id}
              className="md:max-w-screen-md lg:w-6/12 md:w-3/4 sm:w-11/12 bg-todoColors-cyan w-6/12 flex flex-row justify-evenly items-center mt-5 sm:pl-5 md:pl-10 mx-auto sm:text-base smUnique:text-2xl font-bodyFont p-2 rounded-2xl relative "
            >
              <div
                className={`h-full sm:w-3 md:w-10 ${colorList[index]} absolute left-0 rounded-l-2xl`}
              ></div>
              <p className="text-black w-1/3 h-auto break-words">{item.task}</p>
              <div className="rotate-90 bg-white h-0.5 w-7"></div>
              <h3
                className={`${colorList[index]} p-2 select-none w-28 text-center`}
              >
                {item.progress}
              </h3>
              <div className="rotate-90 bg-white h-0.5 w-7"></div>

              <Image
                src="/images/edit.png"
                width={35}
                height={35}
                alt="Picture of the author"
                className="cursor-pointer sm:w-6 md:w-8 lg:w-10"
                onClick={() => EditTodo(item.id)}
              />
              <div className="rotate-90 bg-white h-0.5 w-7"></div>

              <Image
                src="/images/delete.png"
                width={25}
                height={25}
                alt="Picture of the author"
                className="cursor-pointer sm:w-5 md:w-6 lg:w-7"
                onClick={() => deleteTodo(item.id)}
              />
            </div>
          </>
        );
      })}{" "}
    </div>
  );
}
