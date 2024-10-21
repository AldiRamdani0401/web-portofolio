import ListMenu from "./ListMenu";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row gap-4 justify-between bg-gray-950 p-4 w-full text-white">
      <a href="#" class=" cursor-pointer text-lg font-bold">My Portofolio 🚀</a>
      <div className="sm:hidden lg:block">
        <ListMenu />
      </div>
      <a class="sm:hidden lg:block hover:font-bold hover:text-lg cursor-pointer">Be Friends</a>
    </div>
  );
}

export default NavBar;
