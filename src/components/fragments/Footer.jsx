// import hero from "../../assets/images/hero.png";

const date = new Date();
const thisYear = date.getFullYear();

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 justify-between bg-gray-950 p-4 w-full text-white">
      <div className="flex flex-row gap-4 justify-end w-full">
        <a class="sm:hidden lg:block hover:font-bold hover:text-lg cursor-pointer">Join Me</a>
      </div>
      <div className="flex flex-row gap-4 justify-between w-full">
        <a href="#" class=" cursor-pointer text-lg font-bold">MyPortofolio</a>
        <div className="sm:hidden lg:block">
          Copyright &copy; {thisYear} - Aldi Ramdani
        </div>
        <a class="sm:hidden lg:block hover:font-bold hover:text-lg cursor-pointer">Join Me</a>
      </div>
    </footer>
  );
}

export default Footer;
