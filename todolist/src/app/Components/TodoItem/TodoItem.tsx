"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useStatus, useTodoItemInputValue } from "@/app/Context/InputContext";

export default function TodoItem() {

  const todoItemList = useTodoItemInputValue();

  useEffect(() => {
    console.log(todoItemList);
  }, [todoItemList]);

  const colorList: string[] = []

  return (
    <div className="pb-14">
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
              key={index}
              className="bg-todoColors-cyan w-6/12 flex flex-row justify-evenly items-center mt-4 pl-10 mx-auto text-2xl font-bodyFont p-2 rounded-2xl relative"
            >
              <div
                className={`h-full w-10 ${colorList[index]} absolute left-0 rounded-l-2xl`}
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
                className="cursor-pointer"
              />
              <div className="rotate-90 bg-white h-0.5 w-7"></div>

              <Image
                src="/images/delete.png"
                width={25}
                height={25}
                alt="Picture of the author"
                className="cursor-pointer"
              />
            </div>
          </>
        );
      })}{" "}
    </div>
  );
}
