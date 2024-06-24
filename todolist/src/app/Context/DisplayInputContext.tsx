// To inform Next.js that this is a client component
"use client";

import { useState, createContext, useContext, ReactNode } from "react";

type EditDisplayType = boolean;
type EditDisplayFunctionType = (option: EditDisplayType) => void;

/* Edit Display option context */
const EditDisplayFunctionContext = createContext<EditDisplayFunctionType>(() => {});
const EditDisplayContext = createContext<EditDisplayType>(false);

export function useShowEditDisplayFunction(): EditDisplayFunctionType {
  return useContext(EditDisplayFunctionContext);
}

export function useShowEditDisplay(): EditDisplayType {
  return useContext(EditDisplayContext);
}

interface EditInputProviderProps {
  children: ReactNode;
}

export function EditDisplayProvider({ children }: EditInputProviderProps) {
  const [showShowDisplay, setShowEditDisplay] = useState<EditDisplayType>(false);

  return (
    <EditDisplayContext.Provider value={showShowDisplay}>
      <EditDisplayFunctionContext.Provider value={setShowEditDisplay}>
        {children}
      </EditDisplayFunctionContext.Provider>
    </EditDisplayContext.Provider>
  );
}
