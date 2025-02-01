const MainLayout = ({ children }) => {
  return (
      <main className="flex-1 overflow-auto flex flex-col snap-y select-none scrollbar-hide">
        {children}
      </main>
  );
}

export default MainLayout;
