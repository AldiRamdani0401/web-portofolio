import IconDownLoad from "../../../assets/icons/download";
import profile from "../../../assets/images/profile.png";

import { languageMap } from "../../../store/language";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-fit w-full py-2 md:px-5 lg:py-20 xl:py-28  bg-slate-950 snap-start animate-fadeIn"
    >
      {/* <div className="text-white">
        <h1 className="text-center font-bold text-3xl py-5">
          {languageMap().content[0]} 👨🏻‍💼
        </h1>
      </div> */}
      <div className="flex flex-col justify-center gap-0 lg:gap-64 xl:gap-72 mb-44 px-0 lg:px-5 xl:px-10 h-fit">
        {/* MOBILE */}
        <h1 className="block lg:hidden text-center font-bold text-3xl py-5 text-slate-300">
          {languageMap().content[0]}
        </h1>
        <div className="block lg:hidden w-70 mx-auto border-2 py-[0.8px] px-2 lg:px-0 rounded-sm bg-gradient-to-r from-slate-100 via-yellow-600 to-slate-100 bg-clip-border border-transparent animate-gradient-x"></div>
        {/* Sub Container 1 */}
        <div className="flex flex-col lg:flex-row w-full gap-6">
          {/* Image */}
          <div className="w-full h-fit lg:w-fit xl:w-1/2 mt-5 lg:mt-28 xl:mt-16">
            <div className="flex flex-col p-2 w-56 h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto bg-gray-800 rounded-full overflow-hidden">
              <img src={profile} class="object-cover h-96 w-96" />
            </div>
          </div>
          {/* End of Image */}
          {/* Description */}
          <div className="w-full text-center px-2 lg:px-0 xl:px-10 lg:text-left mt-5">
            {/* MD - XL */}
            <h1 className="hidden lg:block font-bold text-3xl py-5 text-slate-300">
              {languageMap().content[0]}
            </h1>
            <div className="hidden lg:block border-2 py-[0.8px] px-2 lg:px-0 rounded-sm bg-gradient-to-r from-slate-100 via-yellow-600 to-slate-100 bg-clip-border border-transparent animate-gradient-x"></div>
            {/* MD - XL */}
            <div className="py-5 px-2 lg:px-0 mb-0 text-slate-300 w-fit h-fit">
              <p className="mb-4 text-center text-3xl font-medium lg:text-justify">
                Aldi Ramdani
              </p>
              <p className="mb-4 text-justify">
                <span className="ml-5 lg:ml-8">
                  Saya seorang Fullstack Developer
                </span>{" "}
                dengan keahlian JavaScript, TypeScript, PHP, Go, dan berkomitmen
                untuk terus mengembangkan keterampilan saya di bidang software
                development.
              </p>

              <p className="mb-4 text-justify">
                <span className="ml-5 lg:ml-8">Saya berpengalaman</span> dalam
                membangun aplikasi yang efisien, scalable, dan user-friendly,
                saya juga mampu bekerja dalam kolaborasi, cepat beradaptasi, dan
                berpikir kritis dalam pemecahan masalah kompleks. Dengan
                semangat kerja dan belajar yang tinggi, saya siap berkontribusi
                dalam proyek inovatif.
              </p>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
                <div className="flex flex-col gap-1">
                  <p className="flex flex-row gap-2 lg:gap-3">
                    <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                      Nama
                    </span>
                    <span className="text-yellow-300">:</span>
                    <span className="w-full text-left">Aldi Ramdani</span>
                  </p>
                  <p className="flex flex-row gap-2 lg:gap-3">
                    <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                      Phone
                    </span>{" "}
                    <span className="text-yellow-300">:</span>{" "}
                    <span className="w-full text-left">+625891361804</span>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="flex flex-row gap-2 lg:gap-3">
                    <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                      Email
                    </span>{" "}
                    <span className="text-yellow-300">:</span>{" "}
                    <span className="w-full text-left">
                      ramdanialdi889@gmail.com
                    </span>
                  </p>
                  <p className="flex flex-row gap-2 lg:gap-3">
                    <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                      Alamat
                    </span>{" "}
                    <span className="text-yellow-300">:</span>{" "}
                    <span className="w-full text-left lg:text-nowrap">
                      Karawang, Jawa Barat, Indonesia
                    </span>
                  </p>
                </div>
              </div>
              {/* Resume */}
              <div className="w-fit mt-5">
                <button
                  type="button"
                  onClick={() => scrollToSection("about-me")}
                  className="flex flex-row gap-2 items-center border border-indigo-500 text-indigo-100 hover:bg-indigo-900 text-xl lg:text-lg px-2 py-1 rounded-md text-nowrap"
                >
                  <span>My Resume</span>
                  <IconDownLoad />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Qualification */}
        <div className="w-full text-center px-2 lg:px-10 lg:text-left mt-5">
          {/* MD - XL */}
          <h1 className="hidden lg:block font-bold text-3xl py-5 text-slate-300">
            My Qualification
          </h1>
          <div className="hidden lg:block border-2 py-[0.8px] px-2 lg:px-0 rounded-sm bg-gradient-to-r from-slate-100 via-yellow-600 to-slate-100 bg-clip-border border-transparent animate-gradient-x"></div>
          {/* MD - XL */}
          <div className="py-5 px-2 lg:px-0 mb-0 text-slate-300 w-fit h-fit">
            <p className="mb-4 text-center text-3xl font-medium lg:text-justify">
              Aldi Ramdani
            </p>
            <p className="mb-4 text-justify">
              <span className="ml-5 lg:ml-8">
                Saya seorang Fullstack Developer
              </span>{" "}
              dengan keahlian JavaScript, TypeScript, PHP, Go, dan berkomitmen
              untuk terus mengembangkan keterampilan saya di bidang software
              development.
            </p>

            <p className="mb-4 text-justify">
              <span className="ml-5 lg:ml-8">Saya berpengalaman</span> dalam
              membangun aplikasi yang efisien, scalable, dan user-friendly, saya
              juga mampu bekerja dalam kolaborasi, cepat beradaptasi, dan
              berpikir kritis dalam pemecahan masalah kompleks. Dengan semangat
              kerja dan belajar yang tinggi, saya siap berkontribusi dalam
              proyek inovatif.
            </p>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
              <div className="flex flex-col gap-1">
                <p className="flex flex-row gap-2 lg:gap-3">
                  <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                    Nama
                  </span>
                  <span className="text-yellow-300">:</span>
                  <span className="w-full text-left">Aldi Ramdani</span>
                </p>
                <p className="flex flex-row gap-2 lg:gap-3">
                  <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                    Phone
                  </span>{" "}
                  <span className="text-yellow-300">:</span>{" "}
                  <span className="w-full text-left">+625891361804</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex flex-row gap-2 lg:gap-3">
                  <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                    Email
                  </span>{" "}
                  <span className="text-yellow-300">:</span>{" "}
                  <span className="w-full text-left">
                    ramdanialdi889@gmail.com
                  </span>
                </p>
                <p className="flex flex-row gap-2 lg:gap-3">
                  <span className="text-left w-1/4 lg:w-fit text-yellow-300">
                    Alamat
                  </span>{" "}
                  <span className="text-yellow-300">:</span>{" "}
                  <span className="w-full text-left lg:text-nowrap">
                    Karawang, Jawa Barat, Indonesia
                  </span>
                </p>
              </div>
            </div>
            {/* Resume */}
            <div className="w-fit mt-5">
              <button
                type="button"
                onClick={() => scrollToSection("about-me")}
                className="flex flex-row gap-2 items-center border border-indigo-500 text-indigo-100 hover:bg-indigo-900 text-xl lg:text-lg px-2 py-1 rounded-md text-nowrap"
              >
                <span>My Resume</span>
                <IconDownLoad />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
