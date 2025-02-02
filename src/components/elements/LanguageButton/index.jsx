import { createSignal, createEffect } from "solid-js";
import { logoEnglish, logoIndonesian } from "../../../assets/images/languages";
import { ipInfo } from "../../../store/location";
import { setLanguage } from "../../../store/language";

// Daftar logo sesuai dengan kode bahasa
const logoMap = {
  'ID': logoIndonesian,
  'EN': logoEnglish,
};

const LanguageButton = () => {
  const [state, setState] = createSignal('EN'); // Default 'EN'

  // Memanggil ipInfo dan mengupdate state dengan kode negara
  // createEffect(() => {
  //   const fetchCountryCode = async () => {
  //     const info = await ipInfo();
  //     if (info?.country_code) {
  //       setState(info.country_code);
  //       setLanguage(info.country_code === 'ID' ? 'ID' : 'EN'); // Memperbarui global state language
  //     }
  //   };
  //   fetchCountryCode();
  // });

  return (
    <button
      className="flex items-center justify-end p-1 lg:p-2 rounded-full h-10 w-10 hover:bg-blue-950"
      onClick={() => {
        // Logika untuk mengubah bahasa
        const newLanguage = state() === 'EN' ? 'ID' : 'EN'; // Toggle antara 'ID' dan 'EN'
        setState(newLanguage);
        setLanguage(newLanguage);
      }}
    >
      <img
        src={state() === 'EN' ? logoMap['ID'] : logoMap['EN']}  // Jika state() tidak ditemukan, fallback ke EN
        className="object-cover h-full w-full"
        alt={state() === 'ID' ? 'Bahasa Indonesia' : 'English'}
      />
    </button>
  );
};

export default LanguageButton;
