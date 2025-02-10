import { createSignal, onCleanup, onMount } from "solid-js";

// Components
import Notification from "../fragments/Notification";
import MainNavBar from "../fragments/MainNavBar";
import Footer from "../fragments/Footer";

const MainLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = createSignal(false);
  let lastScrollTop = 0;
  let mainLayoutRef;

  const handleScroll = () => {
    if (!mainLayoutRef) return;

    const scrollTop = mainLayoutRef.scrollTop;

    if (scrollTop > lastScrollTop) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  onMount(() => {
    if (mainLayoutRef) {
      mainLayoutRef.addEventListener("scroll", handleScroll);
    }
  });

  onCleanup(() => {
    if (mainLayoutRef) {
      mainLayoutRef.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <>
      <div className={isScrolled() ? "hidden" : ""}>
        <Notification />
        <MainNavBar />
      </div>
      <div
        ref={(el) => (mainLayoutRef = el)} // Set ref dengan benar
        id="main-layout"
        className="flex flex-col h-dvh overflow-y-auto scroll-smooth scrollbar-hide"
      >
        <main
          id="main-content"
          className="flex-grow flex flex-col xl:pb-52 bg-gray-950 select-none"
        >
          {children}
        </main>

        {/* Footer selalu berada di bawah */}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
