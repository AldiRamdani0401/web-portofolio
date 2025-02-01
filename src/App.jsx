import { createEffect, createSignal } from "solid-js";
import Footer from "./components/fragments/Footer";
import NavBar from "./components/fragments/NavBar";
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

  createEffect(() => {
    console.log(isScrolled());
  })

  return (
    <div className="flex flex-col h-screen w-full">
      <SplashScreen>
        <div id="navbar-wrapper" className={`transition-transform duration-300 ${isScrolled() ? '-translate-y-full' : ''}`}>
          <NavBar />
        </div>
        {createEffect(() => {
          const navbarWrapper = document.getElementById("navbar-wrapper");
          if (navbarWrapper) {
            navbarWrapper.classList.add('translate-y-0');
          }
        })}
        {/* <Notification /> */}
        <MainLayout setScroll={setIsScrolled}>
          <ContentLayout />
          <Footer />
        </MainLayout>
      </SplashScreen>
    </div>
  );
}

export default App;
