import { createSignal } from "solid-js";
import Footer from "./fragments/Footer";
import MainNavBar from "./fragments/MainNavBar";
import Notification from "./fragments/Notification";
import ContentLayout from "./layouts/ContentLayout";
import MainLayout from "./layouts/MainLayout";

const Main = () => {
  const [isScrolled, setIsScrolled] = createSignal(false);

  return (
    <div className="flex flex-col h-screen w-full">
      <div className={isScrolled() ? "hidden" : ""}>
        <MainNavBar />
      </div>
      <Notification />
      <MainLayout setScroll={setIsScrolled}>
        <ContentLayout />
        <Footer />
      </MainLayout>
    </div>
  );
};

export default Main;
