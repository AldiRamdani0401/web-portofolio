import { createSignal } from "solid-js";

const Notification = () => {
  const [visible, setVisible] = createSignal(true);

  return (
    <div className={`${visible() ? 'flex' : 'hidden'} justify-center items-center gap-10 sticky top-0 w-full text-center font-bold bg-yellow-500 py-2 animate-pulse`}>
      <h1 className="self-center text-xs lg:text-2xl text-nowrap">👷🏻‍♂️ This website is still under development 👷🏻‍♂️</h1>
      <button
        className="rounded-lg bg-red-600 hover:bg-red-400 text-white font-light hover:font-bold px-2 py-1"
        onClick={() => setVisible((prev) => !prev)}
      >
        X
      </button>
    </div>
  );
};

export default Notification;
