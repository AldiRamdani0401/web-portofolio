const ListMenu = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row gap-5 text-base">
      <a href="#about-me" class="hover:font-bold hover:text-lg cursor-pointer">About Me</a>
      <a href="#my-expertise" class="hover:font-bold hover:text-lg cursor-pointer">My Expertise</a>
      <a href="#my-exprience" class="hover:font-bold hover:text-lg cursor-pointer">My Exprience</a>
      <a href="#projects" class="hover:font-bold hover:text-lg cursor-pointer">Projects</a>
    </div>
  )
}

export default ListMenu;

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   }
// };

// const ListMenu = () => {
//   return (
//     <div className="flex sm:flex-col lg:flex-row gap-3 text-base">
//       <button onClick={() => scrollToSection('about-me')} class="hover:font-bold hover:text-lg cursor-pointer">About Me</button>
//       <button onClick={() => scrollToSection('my-skills')} class="hover:font-bold hover:text-lg cursor-pointer">My Skills</button>
//       <button onClick={() => scrollToSection('my-experience')} class="hover:font-bold hover:text-lg cursor-pointer">My Experience</button>
//       <button onClick={() => scrollToSection('projects')} class="hover:font-bold hover:text-lg cursor-pointer">Projects</button>
//     </div>
//   );
// };

// export default ListMenu;
