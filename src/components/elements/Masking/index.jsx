const variant = {
  "dark" : "bg-black",
  "ligth": "bg-white"
}

const Masking = (props) => {
  const color = variant[props.variant] || "bg-black";
  return <div className={`h-screen w-screen ${color} opacity-60 z-10`}></div>;
};

export default Masking;
