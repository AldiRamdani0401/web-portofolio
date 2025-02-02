import Carousel from "../fragments/Carousel";
import SliderImage from "../fragments/SliderImage";

// Experience
import bangkit from "../../assets/images/expriences/bangkit.png";

// Sections
import AboutMe from "../sections/AboutMe";
import MyExpertise from "../sections/MyExpertise";
import MyExperience from "../sections/MyExperience";
import Projects from "../sections/Projects";

const ContentLayout = () => {
  return (
    <div id="content" className="relative">
      {/* CAROUSEL */}
        <Carousel/>
      {/* ABOUT ME */}
        <AboutMe/>
      {/* MY EXPERTISE */}
        <MyExpertise/>
      {/* MY EXPERIENCE */}
        <MyExperience/>
      {/* PROJECTS */}
        <Projects />
    </div>
  );
};

export default ContentLayout;
