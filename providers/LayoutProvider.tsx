"use client";

import React, { ReactNode } from "react";
import { NavBar } from "@/components/NavBar";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default LayoutProvider;
