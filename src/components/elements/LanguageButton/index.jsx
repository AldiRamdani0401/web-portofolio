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
  const [state, setState] = createSignal('ID'); // Default 'ID'

  // Memanggil ipInfo dan mengupdate state dengan kode negara
  createEffect(() => {
    const fetchCountryCode = async () => {
      const info = await ipInfo();
      if (info?.countryCode) {
        setState(info.countryCode);
        setLanguage(info.countryCode === 'ID' ? 'ID' : 'EN'); // Memperbarui global state language
      }
    };
    fetchCountryCode();
  });

  return (
    <button
      className="p-2 rounded-2xl hover:bg-blue-950"
      onClick={() => {
        // Logika untuk mengubah bahasa
        const newLanguage = state() === 'ID' ? 'EN' : 'ID'; // Toggle antara 'ID' dan 'EN'
        setState(newLanguage);
        setLanguage(newLanguage);
      }}
    >
      <img
        src={logoMap[state()] ?? logoMap['EN']}  // Jika state() tidak ditemukan, fallback ke EN
        className="h-8 w-24 lg:w-10"
        alt={state() === 'ID' ? 'Bahasa Indonesia' : 'English'}
      />
    </button>
  );
};

export default LanguageButton;
