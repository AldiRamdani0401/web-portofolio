import { createSignal } from "solid-js";
import Footer from "./components/fragments/Footer";
import MainNavBar from "./components/fragments/MainNavBar";
import Notification from "./components/fragments/Notification";
import SplashScreen from "./components/fragments/SplashScreen";
import ContentLayout from "./components/layouts/ContentLayout";
import MainLayout from "./components/layouts/MainLayout";
import { getLocation } from "./store/location";

let location = true;
function App() {
  if (location) {
    getLocation();
    location = false;
  }

  const [isScrolled, setIsScrolled] = createSignal(false);

  return (
    <div className="flex flex-col h-screen w-full">
      <SplashScreen>
        <div className={isScrolled() ? 'hidden' : ''}>
          <MainNavBar />
        </div>
        <Notification />
        <MainLayout setScroll={setIsScrolled}>
          <ContentLayout />
          <Footer />
        </MainLayout>
      </SplashScreen>
    </div>
  );
}

export default App;
