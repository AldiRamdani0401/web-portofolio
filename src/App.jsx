import { createSignal, onMount, Show } from "solid-js";

// Components
import SplashScreen from "./components/fragments/SplashScreen";
import Main from "./components/Main";

// Store
import { getLocation } from "./store/location";

function App() {
  const [isLoading, setIsLoading] = createSignal(true);
  const [locationFetched, setLocationFetched] = createSignal(false);

  onMount(() => {
    if (!locationFetched()) {
      getLocation();
      setLocationFetched(true);
    }

    // Simulasi waktu splash screen (misalnya 2 detik)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <Show when={!isLoading()} fallback={<SplashScreen />}>
      <Main/>
    </Show>
  );
}

export default App;
