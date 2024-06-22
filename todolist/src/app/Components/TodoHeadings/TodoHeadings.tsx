"use client";
import { useTodoItemInputValue } from "@/app/Context/InputContext";
import React from "react";

export default function TodoHeadings() {
  const todolist = useTodoItemInputValue();
  const heading: string[] = ["To-dos", "Status", "Action"];

  let displayHeadings;

  if (todolist.length !== 0 || todolist === undefined) {
    displayHeadings = <div className="w-6/12 flex flex-row justify-around items-center mt-14 mx-auto text-2xl font-bodyFont pl-20">
      {heading.map((item: string, index: number) => {
        return (
          <h1 key={index} className="text-white underline select-none">
            {item}
          </h1>
        );
      })}
    </div>
  } else {
    displayHeadings = <></>
  }

  return (
    <>
      {displayHeadings}
    </>
  );
}
