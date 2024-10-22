import { createSignal, createEffect, onCleanup } from "solid-js";

function SliderImage(props) {
  const images = [...props.slideImages];
  const [currentSlide, setCurrentSlide] = createSignal(0);
  const [intervalValue, setIntervalValue] = createSignal(3000); // Interval untuk auto-slide
  const [autoSlideValue, setAutoSlideValue] = createSignal(false); // Status auto-slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Mengelola auto-slide menggunakan createEffect
  createEffect(() => {
    let interval;
    if (autoSlideValue()) {
      interval = setInterval(nextSlide, intervalValue());
      console.log(interval);
    }

    // Cleanup interval saat komponen tidak digunakan
    onCleanup(() => clearInterval(interval));
  });

  return (
    <div class="carousel-container relative w-full h-full">
      {/* Carousel item */}
      <div class="carousel-item w-full h-full">
        <img
          src={images[currentSlide()]}
          alt={`Slide ${currentSlide() + 1}`}
          class="w-full h-full object-cover"
        />
      </div>

      {/* Tombol navigasi kiri */}
      <button
        class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Tombol navigasi kanan */}
      <button
        class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Indikator carousel */}
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            class={`w-3 h-3 rounded-full ${
              currentSlide() === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Tombol untuk mengaktifkan/menonaktifkan autoSlideValue */}
      <div className="flex gap-2 justify-center py-1">
        <button
          class="text-white p-2 bg-indigo-950 rounded-md"
          onClick={() => {
            setAutoSlideValue((prev) => {
              const newValue = !prev;
              const intervalInput = document.getElementById("interval");

              if (newValue) {
                intervalInput.setAttribute("disabled", true);
              } else {
                intervalInput.removeAttribute("disabled");
              }

              return newValue;
            });
          }}
        >
          {autoSlideValue() ? "Stop" : "Start"}
        </button>
        <input
          id="interval"
          type="number"
          min={1}
          max={60}
          class="w-10 text-center rounded-md"
          placeholder="1"
          defaultValue={1}
          onchange={(e) => setIntervalValue(e.target.value * 1000)}
        />
      </div>
    </div>
  );
}

export default SliderImage;
