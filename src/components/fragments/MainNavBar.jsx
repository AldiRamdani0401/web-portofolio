import DeskstopNavBar from "./Desktop/Header/NavBar";
import MobileNavBar from "./Mobile/Header/NavBar";

const MainNavBar = () => {
  return (
    <>
    <div className="hidden lg:block">
      <DeskstopNavBar />
    </div>
    <div className="block lg:hidden">
      <MobileNavBar />
    </div>
    </>
  );
};
export default MainNavBar;
