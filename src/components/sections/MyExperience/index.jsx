import { languageMap } from "../../../store/language";

const MyExperience = () => {
  return (
    <section
      id="my-experience"
      className="h-fit w-full py-2 md:px-5 lg:px-10 lg:py-32 xl:px-14 xl:pt-16 xl:pb-40 bg-slate-950 snap-start animate-fadeIn"
    >
      {/* Header Section */}
      <div className="text-slate-200">
        <h1 className="text-center font-bold text-4xl py-5">
          {languageMap().content[2]}
        </h1>
      </div>
      {/* end of Header Section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full p-5">
        {/* === experience 1 === */}
        <div className="py-3 px-5 bg-gray-900 lg:p-5 text-slate-200 rounded-xl">
          {/* Header Experience 1 */}
          <div className="flex flex-col h-fit pb-2 lg:py-0 lg:h-36 gap-2 lg:gap-0 border-b-2">
            {/* Label */}
            <div className="h-fit lg:h-full">
              <p className="text-xl font-extrabold lg:font-semibold lg:text-3xl xl:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                Fullstack Developer Intern
              </p>
            </div>
            {/* Length of Service & Status */}
            <div className="flex flex-col gap-1 justify-center text-sm h-full">
              <p className="font-light">
                {languageMap()["sub-content"][3][0]} - GetMedik
              </p>
              <p className="font-light">
                Status : {languageMap()["sub-content"][3][1]}
              </p>
            </div>
          </div>
          {/* Description */}
          <div className="py-3 text-sm text-justify">
            <p className="font-light">
              <span class="ml-8 font-semibold">
                PT. Layanan Medik Indonesia
              </span>
              , {languageMap()["sub-content"][3][2]}
            </p>
            <p className="font-light">
              <span className="ml-8">{languageMap()["sub-content"][3][3]}</span>
            </p>
          </div>
        </div>
        {/* === experience 2 === */}
        <div className="py-3 px-5 bg-gray-900 lg:p-5 text-slate-200 rounded-xl">
          {/* Header Experience 2 */}
          <div className="flex flex-col h-36 border-b-2">
            {/* Label */}
            <div className="h-full">
              <p className="text-xl font-extrabold lg:font-semibold lg:text-2xl xl:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
                {languageMap()["sub-content"][4][0]}
              </p>
              <p className="text-md font-medium lg:text-lg text-left">
                on Basic Internet Programming
              </p>
            </div>
            {/* Length of Service & Status */}
            <div className="flex flex-col gap-1 justify-center text-sm h-full">
              <p className="font-light">
                {languageMap()["sub-content"][4][1]} - STTI Sony Sugema
              </p>
              <p className="font-light">
                Status : {languageMap()["sub-content"][4][2]}
              </p>
            </div>
          </div>
          {/* Description */}
          <div className="py-3 text-sm">
            <p className="mb-4 text-justify">
              <span className="ml-8 font-semibold">
                {languageMap()["sub-content"][4][3]}
              </span>{" "}
              (STTISS). {languageMap()["sub-content"][4][4]}
            </p>
            <p className="mb-4 text-justify">
              <span className="ml-8">{languageMap()["sub-content"][4][5]}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
