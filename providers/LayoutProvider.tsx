"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { fetchUser } from "@/app/(auth)/actions/fetchUsers";
import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
// import { Footer } from "@/components/Footer";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);

  const getCurrentUser = async () => {
    try {
      const response = await fetchUser();
      if (response ?? response?.error) {
        throw new Error(response.error.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      return;
    }
  };

  useEffect(() => {
    if (!isPublicRoute) getCurrentUser();
  }, [isPublicRoute]);

  return (
    <div className="layoutWrapper">
      <NavBar publicRoute={isPublicRoute} />
      {children}
      {/* {getFooter()} */}
    </div>
  );
};

export default LayoutProvider;
