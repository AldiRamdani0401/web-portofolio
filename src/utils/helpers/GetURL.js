const HEF_GetURL = () => {
  const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;
  return (ENVIRONMENT === "dev" && import.meta.env.VITE_DEV_BASE_URL) || (ENVIRONMENT === "prod" && import.meta.env.VITE_PROD_BASE_URL) || 'http://localhost:3000';
}
export default HEF_GetURL;