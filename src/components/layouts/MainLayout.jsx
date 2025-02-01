const MainLayout = ({ children, setScroll }) => {
  let lastScrollTop = 0;

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > lastScrollTop) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  };

  return (
    <main
      id="main-layout"
      className="flex-1 overflow-auto flex flex-col snap-y select-none scrollbar-hide"
      onScroll={handleScroll}
    >
      {children}
    </main>
  );
}

export default MainLayout;
