import ListMenu from "./ListMenu";

const Footer = () => {
  return (
    <footer className="flex flex-row gap-4 justify-between bg-gray-950 p-4 w-full text-white">
      <a href="#" class=" cursor-pointer text-lg font-bold">MyPortofolio</a>
      <div className="sm:hidden lg:block">
        <ListMenu />
      </div>
      <a class="sm:hidden lg:block hover:font-bold hover:text-lg cursor-pointer">Join Me</a>
    </footer>
  );
}

export default Footer;
