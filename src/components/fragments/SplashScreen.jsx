import { createSignal, onCleanup } from "solid-js";
import { SolidTyper } from "solid-typer";

const SplashScreen = ({ children }) => {
  const [visible, setVisible] = createSignal(true);

  // Hide the splash screen after a delay
  setTimeout(() => {
    setVisible(false);
  }, 3000);

  return (
    <>
      {visible() ? (  // Call the signal to get its value
        <div className={`fixed inset-0 bg-gray-800 flex items-center justify-center`}>
          <h1 className="text-white font-bold sm:text-xl lg:text-4xl xl:text-4xl">
          <SolidTyper
              text={[
                "Welcome to My Portofolio Web",
              ]}
              backspaceSpeed={50}
              cursorClassName="cursor"
              cursor={true}
              typingSpeed={50}
            />
          </h1>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default SplashScreen;
