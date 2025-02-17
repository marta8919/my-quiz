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

  console.log("layout provider", isPublicRoute, pathname);

  const getNavBar = () => {
    if (isPublicRoute) return null;
    return <NavBar />;
  };

  // const getFooter = () => {
  //   if (isPublicRoute) return null;
  //   return <Footer />;
  // };

  const getContent = () => {
    // if (isPublicRoute) return null;
    return <>{children}</>;
  };

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
      {getNavBar()}
      {getContent()}
      {/* {getFooter()} */}
    </div>
  );
};

export default LayoutProvider;
