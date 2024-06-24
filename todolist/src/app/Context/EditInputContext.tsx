// To inform Next.js that this is a client component
"use client";

import { useState, createContext, useContext, ReactNode } from "react";

type EditInputType = {

  task: string;
  progress: "incomplete" | "in progress" | "complete" | undefined ;
};

type EditInputFunctionType = (data: any) => void;

type EditIndexType = number /* "incomplete" | "in progress" | "complete" | undefined | ""; */
type EditIndexFunctionType = (option: EditIndexType) => void;

/* Edit Input Context */
const EditInputFunctionContext = createContext<EditInputFunctionType>(() => {});
const EditInputContext = createContext<EditInputType>({

  task: "",
  progress: undefined,
});

export function useEditFunctionInput(): EditInputFunctionType {
  return useContext(EditInputFunctionContext);
}

export function useEditInputValue(): EditInputType {
  return useContext(EditInputContext);
}

/* Edit Index option context */
const EditIndexFunctionContext = createContext<EditIndexFunctionType>(
  () => {}
);
const EditIndexContext = createContext<EditIndexType>(0);

export function useEditIndexFunction(): EditIndexFunctionType {
  return useContext(EditIndexFunctionContext);
}

export function useEditIndexValue(): EditIndexType {
  return useContext(EditIndexContext);
}

interface EditInputProviderProps {
  children: ReactNode;
}

export function EditInputProvider({ children }: EditInputProviderProps) {
  const [editInput, setEditInput] = useState<EditInputType>({
    task: "",
    progress: undefined,
  });

  const [editIndex, setEditIndex] = useState<EditIndexType>(0);

  return (
    <EditIndexContext.Provider value={editIndex}>
      <EditIndexFunctionContext.Provider value={setEditIndex}>
        <EditInputContext.Provider value={editInput}>
          <EditInputFunctionContext.Provider value={setEditInput}>
            {children}
          </EditInputFunctionContext.Provider>
        </EditInputContext.Provider>
      </EditIndexFunctionContext.Provider>
    </EditIndexContext.Provider>
  );
}
