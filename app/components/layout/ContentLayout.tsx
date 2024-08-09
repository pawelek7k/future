import { BreadcrumbContainer } from "@/app/components/global/breadcrumb";
import { MainNavigation } from "@/app/components/layout/MainNavigation";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className="min-h-screen p-10 pt-20 md:p-20">
        <BreadcrumbContainer />
        {children}
      </main>
    </>
  );
};

export default Layout;
