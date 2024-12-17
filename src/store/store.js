import { createStore } from "solid-js/store";

// Membuat store untuk state global
export const [state, setState] = createStore({
  isVisible: true,
});
