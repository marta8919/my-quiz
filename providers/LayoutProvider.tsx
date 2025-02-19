"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { fetchUser } from "@/app/(auth)/actions/fetchUsers";
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
// import { Footer } from "@/components/Footer";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
  const isCreateRoute = ["create"].includes(pathname.split("/")[1]);
  const [userType, setUserType] = useState("");

  const getCurrentUser = async () => {
    try {
      const response = await fetchUser();
      //there is a problem here seems like
      console.log("on get user", response.data);
      setUserType(response?.data.user.userType);

      if (response ?? response?.error) {
        throw new Error(response.error);
      }
    } catch (err) {
      console.log("is this the error?", err);
    }
  };

  useEffect(() => {
    if (!isPublicRoute) getCurrentUser();
  }, [isPublicRoute]);

  return (
    <div>
      <NavBar
        publicRoute={isPublicRoute}
        createRoute={isCreateRoute}
        userType={userType}
      />
      {children}
      {/* {getFooter()} */}
    </div>
  );
};

export default LayoutProvider;
