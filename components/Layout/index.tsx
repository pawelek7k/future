import { MainNavigation } from "./MainNavigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNavigation />
      <main className="min-h-screen">
        {/* <BreadcrumbContainer /> */}
        {children}
      </main>
    </>
  );
};

export default Layout;
