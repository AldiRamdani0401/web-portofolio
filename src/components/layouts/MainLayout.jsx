const MainLayout = ({ children }) => {
  return (
      <main className="bg-slate-950 flex-1 overflow-auto flex flex-col snap-y">
        {children}
      </main>
  );
}

export default MainLayout;
