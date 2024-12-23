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
