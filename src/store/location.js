import { createSignal } from "solid-js";
import { getIPInfo, getPublicIP } from "../services/IPService";
import PrivateClient from "../PrivateClient";

const [publicIP, setPublicIP] = createSignal(null);
const [ipInfo, setIPInfo] = createSignal(null);

export const getLocation = async () => {
  try {
    // Dapatkan IP publik
    const ip = await getPublicIP();
    setPublicIP(ip);

    // Dapatkan informasi IP
    const info = await getIPInfo(ip);
    setIPInfo(info);

    if (info?.ip && info?.country_code) {
      const datas = {
        ip: info.ip,
        nation: info.country_code
      }
      await PrivateClient.post('/', datas);
    }

    // const response = await fetch(url);
    // const json = await response.json();

  } catch (error) {
    console.error('Error getting IP or IP info:', error);
  }
};

export { publicIP, ipInfo };
