import Footer from "./components/fragments/Footer";
import NavBar from "./components/fragments/NavBar";
import SplashScreen from "./components/fragments/SplashScreen";
import ContentLayout from "./components/layouts/ContentLayout";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <SplashScreen>
      <NavBar/>
      <MainLayout>
        <ContentLayout/>
        <Footer/>
      </MainLayout>
    </SplashScreen>
  );
}

export default App;
