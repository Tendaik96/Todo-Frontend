// To inform next js, this is a client component
"use client";

import { useState, createContext, useContext } from "react";

type todoFunctionType = (e: any) => void;
type todoType = string;
type selectType = string | undefined
type selectFunctionType = (e: any) => void;

type todoItemListType = {
  task: string;
  progress: string;
}[]
type todoItemFunctionType = (todoItem: todoItemListType) => void;

type todoData = "incomplete" | "in progress" | "complete" | undefined | ""
type statusFunctionType = (color: any) => void;
type statusType =
  | "bg-todoColors-purple"
  | "bg-red-600"
  | "bg-todoColors-correctGreen"
  | undefined;

/* Input Context */
const TodoFunctionContext = createContext<todoFunctionType>((e: any) => {});
const TodoContext = createContext<todoType>("");

export function useTodoFunctionInput(): todoFunctionType {
  return useContext(TodoFunctionContext);
}
export function useTodoInputValue(): todoType {
  return useContext(TodoContext);
}

/* Select option context */
const SelectFunctionContext = createContext<selectFunctionType>((e: any) => {});
const SelectContext = createContext<selectType>("");

export function useSelectFunction(): selectFunctionType {
  return useContext(SelectFunctionContext);
}
export function useSelectValue(): selectType {
  return useContext(SelectContext);
}

/* todo item list context */
const TodoItemFunctionContext = createContext<todoItemFunctionType>((e: any) => {});
const TodoItemContext = createContext<todoItemListType>([]);

export function useTodoItemFunctionInput(): todoItemFunctionType {
  return useContext(TodoItemFunctionContext);
}
export function useTodoItemInputValue(): todoItemListType {
  return useContext(TodoItemContext);
}

/* background colour for todolist item, e */
const StatusFunctionContext = createContext<statusFunctionType>((color: any) => {});
const StatusContext = createContext<statusType>("bg-red-600");

export function useStatusFunction(): statusFunctionType {
  return useContext(StatusFunctionContext);
}
export function useStatus(): statusType {
  return useContext(StatusContext);
}

export function InputProvider({ children }: any) {
  const [todo, setTodo] = useState<string>("");
    const [select, setSelect] = useState<todoData>();
    const [todoItemList, setTodoItemList] = useState<todoItemListType>([])
    const [status, setStatus] = useState<statusType>();

  

  return (
    <StatusContext.Provider value={status}>
      <StatusFunctionContext.Provider value={setStatus}>
        <TodoItemContext.Provider value={todoItemList}>
          <TodoItemFunctionContext.Provider value={setTodoItemList}>
            <SelectContext.Provider value={select}>
              <SelectFunctionContext.Provider value={setSelect}>
                <TodoContext.Provider value={todo}>
                  <TodoFunctionContext.Provider value={setTodo}>
                    {children}
                  </TodoFunctionContext.Provider>
                </TodoContext.Provider>
              </SelectFunctionContext.Provider>
            </SelectContext.Provider>
          </TodoItemFunctionContext.Provider>
        </TodoItemContext.Provider>
      </StatusFunctionContext.Provider>
    </StatusContext.Provider>
  );
}
