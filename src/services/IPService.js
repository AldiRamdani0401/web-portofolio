export const getPublicIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting public IP address:', error);
    throw error;
  }
};

export const getIPInfo = async (ip) => {
  try {
    const response = await fetch(`https://get.geojs.io/v1/ip/geo/${ip}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching IP information:', error);
    throw error;
  }
};