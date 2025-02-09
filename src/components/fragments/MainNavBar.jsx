import DeskstopNavBar from "./Desktop/Header/NavBar";
import MobileNavBar from "./Mobile/Header/NavBar";

const MainNavBar = () => {
  return (
    <>
    <div className="hidden lg:block">
      <h1>Desktop</h1>
      <DeskstopNavBar />
    </div>
    <div className="block lg:hidden">
    <h1>Mobile</h1>
      <MobileNavBar />
    </div>
    </>
  );
};
export default MainNavBar;
