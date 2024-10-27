import Footer from "./components/fragments/Footer";
import NavBar from "./components/fragments/NavBar";
import Notification from "./components/fragments/Notification";
import SplashScreen from "./components/fragments/SplashScreen";
import ContentLayout from "./components/layouts/ContentLayout";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <SplashScreen>
        <Notification/>
        <NavBar />
        <MainLayout>
          <ContentLayout />
          <Footer />
        </MainLayout>
      </SplashScreen>
    </div>
  );
}

export default App;
