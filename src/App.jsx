import { createSignal, onMount } from "solid-js";

import { state, setState } from "./store/store";

import Footer from "./components/fragments/Footer";
import NavBar from "./components/fragments/NavBar";
import Notification from "./components/fragments/Notification";
import SplashScreen from "./components/fragments/SplashScreen";
import ContentLayout from "./components/layouts/ContentLayout";
import MainLayout from "./components/layouts/MainLayout";
import { getLocation } from "./store/location";

function App() {
  getLocation();
  return (
    <div className="flex flex-col h-screen w-full">
      <SplashScreen>
        <NavBar/>
        <Notification/>
        <MainLayout>
          <ContentLayout/>
          <Footer />
        </MainLayout>
      </SplashScreen>
    </div>
  );
}

export default App;
