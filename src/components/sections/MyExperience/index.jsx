import { languageMap } from "../../../store/language";

const MyExperience = () => {
  return (
    <section id="my-experience" className="h-fit w-full snap-center">
    <div className="bg-indigo-950 text-white">
      <h1 className="text-center font-bold text-4xl py-5">
        {languageMap().content[2]} 🚀
      </h1>
    </div>
    {/* experience 1 */}
    <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
      <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
        <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
          <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
            Junior Fullstack Developer
          </p>
          <p className="flex flex-col lg:flex-row mb-4 text-base font-normal lg:text-lg text-justify lg:font-light">
            <span>( 27 September - 04 November 2024 )</span>
            <span>- Heart Developer</span>
          </p>
          <p className="mb-4 text-base font-normal lg:text-lg lg:font-light text-justify">
            Status : {languageMap()["sub-content"][2][0]}
          </p>
          <hr className="mt-1 mb-2 lg:mb-5" />
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][2][1]}
            </span>
            <span class="font-semibold">
              PT. Pilar Anugerah Digital Indonesia {""}
            </span>
            (Heart Developer), {languageMap()["sub-content"][2][2]}
          </p>
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][2][3]}
            </span>
          </p>
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][2][4]}
            </span>
          </p>
        </div>
      </div>
    </div>
    {/* experience 2 */}
    <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
      <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
        <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
          <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
            Fullstack Developer Intern
          </p>
          <p className="mb-4 text-base font-normal lg:text-lg text-justify lg:font-light">
            {languageMap()["sub-content"][3][0]} - GetMedik
          </p>
          <p className="mb-4 text-base font-normal lg:text-lg lg:font-light text-justify">
            Status : {languageMap()["sub-content"][3][1]}
          </p>
          <hr className="mt-1 mb-2 lg:mb-5" />
          <p className="mb-4 text-justify">
            <span class="ml-8 font-semibold">
              PT. Layanan Medik Indonesia
            </span>
            , {languageMap()["sub-content"][3][2]}
          </p>
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][3][3]}
            </span>
          </p>
        </div>
      </div>
    </div>
    {/* experience 3 */}
    <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
      <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
        <div className="bg-black py-3 px-5 lg:p-5 text-white rounded-lg">
          <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
            {languageMap()["sub-content"][4][0]}
          </p>
          <p className="mb-4 text-[15px] lg:font-medium lg:text-2xl text-left">
            on Basic Internet Programming
          </p>
          <p className="mb-4 text-[13px] text-left font-normal lg:text-lg lg:text-justify lg:font-light">
            {languageMap()["sub-content"][4][1]} - STTI Sony Sugema
          </p>
          <p className="mb-4 text-[15px] text-left font-light lg:text-lg lg:text-justify">
            Status : {languageMap()["sub-content"][4][2]}
          </p>
          <hr className="mt-1 mb-2 lg:mb-5" />
          <p className="mb-4 text-justify">
            <span className="ml-8 font-semibold">
              {languageMap()["sub-content"][4][3]}
            </span>{" "}
            (STTISS). {languageMap()["sub-content"][4][4]}
          </p>
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][4][5]}
            </span>
          </p>
        </div>
      </div>
    </div>
    {/* experience 4 */}
    <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
      <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
        <div className="bg-black p-5 text-white rounded-lg">
          <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
            {languageMap()["sub-content"][5][0]}
          </p>
          <div className="flex gap-1 flex-col lg:flex-wrap text-[13px] text-left font-normal mb-4 lg:text-lg lg:text-justify lg:font-light">
            <p className="flex flex-col gap-1 lg:flex-row">
              {languageMap()["sub-content"][5][1]}
              <span> - Bangkit International Program</span>
            </p>
            <span class="font-light">
              (<i> Google, GoTo, Traveloka </i>)
            </span>
          </div>
          <p className="mb-4 text-[13px] lg:text-lg font-light text-justify">
            Status : {languageMap()["sub-content"][5][2]}
          </p>
          <hr className="mt-1 mb-2 lg:mb-5" />
          <p className="mb-4 text-justify">
            <span class="ml-8 font-semibold">
              {languageMap()["sub-content"][5][3]}
            </span>
            , {languageMap()["sub-content"][5][4]}
          </p>
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][5][5]}
            </span>
          </p>

          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][5][6]}
            </span>
          </p>
        </div>
      </div>
    </div>
    {/* experience 5 */}
    <div className="flex flex-row justify-center h-fit py-10 relative bg-zinc-950">
      <div className="flex flex-col justify-center align-middle px-0 w-full lg:w-1/2 h-full self-center">
        <div className="bg-black p-5 text-white rounded-lg">
          <p className="mb-4 text-2xl font-extrabold lg:font-semibold lg:text-4xl text-left bg-gradient-to-r from-slate-100 via-yellow-500 to-slate-100 bg-clip-text text-transparent animate-gradient-x">
            {languageMap()["sub-content"][6][0]}
          </p>
          <p className="mb-4 text-[13px] text-left font-normal lg:text-lg lg:text-justify lg:font-light">
            {languageMap()["sub-content"][6][1]} - STTI Sony Sugema
          </p>
          <p className="mb-4 text-[15px] text-left font-light lg:text-lg lg:text-justify">
            Status : {languageMap()["sub-content"][6][2]}
          </p>
          <hr className="mt-1 mb-2 lg:mb-5" />
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][6][3]}
            </span>
            <span class="font-semibold">
              {languageMap()["sub-content"][6][4]}
            </span>{" "}
            (STTISS), {languageMap()["sub-content"][6][5]}
          </p>
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][6][6]}
            </span>
          </p>
          <p className="mb-4 text-justify">
            <span className="ml-8">
              {languageMap()["sub-content"][6][7]}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default MyExperience;