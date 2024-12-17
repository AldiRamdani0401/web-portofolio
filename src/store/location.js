import { createSignal } from "solid-js";
import { getIPInfo, getPublicIP } from "../services/IPService";

const [publicIP, setPublicIP] = createSignal(null);
const [ipInfo, setIPInfo] = createSignal(null);

export const getLocation = async () => {
  try {
    // Dapatkan IP publik
    const ip = await getPublicIP();
    setPublicIP(ip);
    console.log('Your public IP address is:', ip);

    // Dapatkan informasi IP
    const info = await getIPInfo(ip);
    setIPInfo(info);
    console.log('IP Info:', info);
  } catch (error) {
    console.error('Error getting IP or IP info:', error);
  }
};

export { publicIP, ipInfo };
