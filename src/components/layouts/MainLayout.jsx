import { createEffect } from "solid-js";

const MainLayout = ({ children, setScroll }) => {
  let lastScrollTop = 0;

  const handleScroll = (e) => {
    const mainHeight = document.getElementById('main-layout').scrollHeight;
    const scrollTop = e.target.scrollTop;
    if (scrollTop > lastScrollTop) {
      setScroll(true);
      createEffect(() => {
        document
          .getElementById("main-layout")
          .classList.add("absolute", "z-50");
      });
    } else {
      setScroll(false);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  };

  return (
    <main
      id="main-layout"
      className="flex-1 overflow-auto flex flex-col select-none scrollbar-hide"
      onScroll={handleScroll}
    >
      {children}
    </main>
  );
};

export default MainLayout;
