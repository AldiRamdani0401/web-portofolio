import { createSignal } from "solid-js";
import { developmentGif } from "../../assets/gif";

const Notification = () => {
  const [visible, setVisible] = createSignal(true);

  return (
    <div
      className={`${
        visible() ? "flex" : "hidden"
      } justify-center items-center gap-10 sticky top-0 w-full text-center bg-yellow-500 py-2`}
    >
      <h1 className="self-center flex items-center gap-2 text-sm lg:text-2xl font-medium text-slate-700 text-nowrap">
        <img
          src={developmentGif}
          className="h-10 w-10 rounded-full"
          alt="development icon"
        />{" "}
        This website is still under development{" "}
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="2em"
        height="2em"
        className="bg-red-50 rounded-full hover:bg-red-100 text-red-600 hover:text-red-500"
        onClick={() => setVisible((prev) => !prev)}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default Notification;
