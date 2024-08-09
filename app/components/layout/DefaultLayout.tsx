const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
