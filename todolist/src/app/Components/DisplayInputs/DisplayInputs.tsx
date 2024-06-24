// To inform Next.js that this is a client component
"use client";

import React from "react";
import Input from "./Input/Input";
import { useShowEditDisplay } from "@/app/Context/DisplayInputContext";
import EditInput from "./EditInput/EditInput";

export default function DisplayInputs() {
  const showShowDisplay = useShowEditDisplay();
  return <>{showShowDisplay ? <EditInput /> : <Input />}</>;
}
