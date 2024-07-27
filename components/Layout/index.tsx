import { MainNavigation } from "./MainNavigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNavigation />
      <main className="min-h-screen bg-background text-text">{children}</main>
    </>
  );
};

export default Layout;
