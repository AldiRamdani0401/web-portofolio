const MainLayout = ({ children }) => {
  return (
    <>
      <main className="bg-slate-950 min-h-screen w-full flex flex-col">
        {children}
      </main>
    </>
  );
}

export default MainLayout;
