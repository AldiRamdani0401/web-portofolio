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
        <div className="flex flex-col lg:flex-row w-full gap-6 mb-16">
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
          {/* SM */}
          <h1 className="block lg:hidden text-center font-bold text-3xl py-5 text-slate-300">
            My Qualification
          </h1>
          <div className="block lg:hidden w-70 mx-auto border-2 py-[0.8px] px-2 lg:px-0 rounded-sm bg-gradient-to-r from-slate-100 via-yellow-600 to-slate-100 bg-clip-border border-transparent animate-gradient-x"></div>
          {/* Qualification 1 */}
          <div className="py-5 px-2 lg:px-0 mb-0 text-slate-300 w-full h-fit">
            <div className="flex flex-col gap-2 w-fit p-4 rounded-xl bg-gray-900 text-slate-200 shadow-lg">
              <h1 className="font-semibold text-xl text-yellow-500">Bachelor's Degree in Informatics Engineering</h1>
              <h1 className="self-end font-medium text-lg">2021 - 2025</h1>
              <p className="text-justify font-light">As an Informatics Engineering student at STTI Sony Sugema, I have developed a strong understanding of software and hardware. This program has equipped me with relevant hard and soft skills to tackle challenges in technology development. This academic experience has strengthened my abilities, preparing me to contribute effectively to both industry and society.</p>
            </div>
            {/* Indonesian */}
            {/* <div className="flex flex-col gap-2 w-fit p-4 rounded-xl bg-gray-950 border">
              <h1 className="font-semibold text-xl text-yellow-500">Bachelor's Degree in Informatics Engineering</h1>
              <h1 className="self-end font-medium text-lg">2021 - 2025</h1>
              <p className="text-justify">Sebagai mahasiswa Teknik Informatika di STTI Sony Sugema, saya telah membangun pemahaman yang kuat dalam software dan hardware. Program studi ini membekali saya dengan hard-skill dan soft-skill yang relevan untuk menghadapi tantangan dalam pengembangan teknologi. Pengalaman akademis ini memperkuat kemampuan saya, mempersiapkan saya untuk berkontribusi secara efektif di dunia industri dan masyarakat.</p>
            </div> */}
          </div>
          {/* Qualification 2 */}
          <div className="py-5 px-2 lg:px-0 mb-0 text-slate-300 w-full h-fit">
            <div className="flex flex-col gap-2 w-fit p-4 rounded-xl bg-gray-900 text-slate-200 shadow-lg">
              <h1 className="font-semibold text-xl text-yellow-500">Cloud Computing Participant</h1>
              <h1 className="self-end font-medium text-lg">2024</h1>
              <p className="text-justify font-light">Bangkit Academy is an intensive educational program in collaboration with Google, Gojek, Tokopedia, and Traveloka to develop outstanding digital talent in Machine Learning, Mobile Development, and Cloud Computing. This program equips participants with industry-relevant skills, preparing them to become future professionals in the digital era.</p>
            </div>
          </div>
          {/* Qualification 3 */}
          <div className="py-5 px-2 lg:px-0 mb-0 text-slate-300 w-full h-fit">
            <div className="flex flex-col gap-2 w-fit p-4 rounded-xl bg-gray-900 text-slate-200 shadow-lg">
              <h1 className="font-semibold text-xl text-yellow-500">Chairman of HIMATI</h1>
              <h1 className="self-end font-medium text-lg">2023 - 2024</h1>
              <p className="text-justify font-light">As Chairman of HIMATI STTI Sony Sugema, I gained leadership experience in managing a study program-level organization. I focused on enhancing soft and hard skills to improve academic quality by designing work and research programs aligned with technology trends and job market demands, ensuring students remain competent and competitive.</p>
            </div>
          </div>
          {/* Indonesian */}
          {/* <div className="py-5 px-2 lg:px-0 mb-0 text-slate-300 w-full h-fit border">
            <div className="flex flex-col gap-2 w-fit p-4 rounded-xl bg-gray-950 border">
              <h1 className="font-semibold text-xl text-yellow-500">Bachelor's Degree in Informatics Engineering</h1>
              <h1 className="self-end font-medium text-lg">2021 - 2025</h1>
              <p className="text-justify">Sebagai Ketua HIMATI STTI Sony Sugema, saya memperoleh pengalaman kepemimpinan dalam mengelola organisasi di tingkat program studi. Saya berfokus pada pengembangan soft skill dan hard skill untuk meningkatkan kualitas akademik dengan merancang program kerja dan penelitian yang selaras dengan tren teknologi dan kebutuhan pasar kerja, sehingga mahasiswa Teknik Informatika tetap kompeten dan berdaya saing.</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
