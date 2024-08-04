import { BreadcrumbContainer } from "../global/breadcrumb";
import { MainNavigation } from "./MainNavigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNavigation />
      <main className="min-h-screen p-20">
        <BreadcrumbContainer />
        {children}
      </main>
    </>
  );
};

export default Layout;
