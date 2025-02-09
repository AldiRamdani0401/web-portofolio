/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseGrow: "pulseGrow 8s infinite",
        fadeIn: "fadeIn 3s ease-in-out forwards",
        "pulse-long": "pulse 5s infinite",
        "pulse-4": "pulse 4s infinite",
        "pulse-3": "pulse 3s infinite",
        "pulse-2": "pulse 2s infinite",
        "pulse-1": "pulse 1s infinite",
        shakeRightSlow: "shakeRightSlow 2s ease-in-out infinite",
        shakeLeftSlow: "shakeLeftSlow 2s ease-in-out infinite",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
        6000: "6000ms",
        7000: "7000ms",
        8000: "8000ms",
        9000: "9000ms",
        10000: "10000ms",
      },
      keyframes: {
        pulseGrow: {
          "0%, 100%": { transform: "scale(1.2)", opacity: "1" },
          "50%": { transform: "scale(0.6)", opacity: "0.6" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shakeRightSlow: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(3px)" },
          "100%": { transform: "translateX(0)" },
        },
        shakeLeftSlow: {
          "0%": { transform: "translateX(1px)" }, // Awal dari kanan
          "25%": { transform: "translateX(5px)" }, // Bergerak ke kanan
          "50%": { transform: "translateX(-5px)" }, // Bergerak ke kiri
          "75%": { transform: "translateX(3px)" }, // Kembali ke kanan sedikit
          "100%": { transform: "translateX(0)" }, // Kembali ke posisi awal
        },
      },
      screens: {
        sm: "390px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        70: "17.5rem", // 70 * 0.25rem = 17.5rem (280px)
        71: "17.75rem", // 71 * 0.25rem = 17.75rem (284px)
        72: "18rem", // 72 * 0.25rem = 18rem (288px)
        73: "18.25rem", // 73 * 0.25rem = 18.25rem (292px)
        74: "18.5rem", // 74 * 0.25rem = 18.5rem (296px)
        75: "18.75rem", // 75 * 0.25rem = 18.75rem (300px)
        76: "19rem", // 76 * 0.25rem = 19rem (304px)
        77: "19.25rem", // 77 * 0.25rem = 19.25rem (308px)
        78: "19.5rem", // 78 * 0.25rem = 19.5rem (312px)
        79: "19.75rem", // 79 * 0.25rem = 19.75rem (316px)
        80: "20rem", // 80 * 0.25rem = 20rem (320px)
        81: "20.25rem", // 81 * 0.25rem
        82: "20.5rem", // 82 * 0.25rem
        83: "20.75rem", // 83 * 0.25rem
        84: "21rem", // 84 * 0.25rem
        85: "21.25rem", // 85 * 0.25rem
        86: "21.5rem", // 86 * 0.25rem
        87: "21.75rem", // 87 * 0.25rem
        88: "22rem", // 88 * 0.25rem
        89: "22.25rem", // 89 * 0.25rem
        90: "22.5rem", // 90 * 0.25rem
        91: "22.75rem", // 91 * 0.25rem
        92: "23rem", // 92 * 0.25rem
        93: "23.25rem", // 93 * 0.25rem
        94: "23.5rem", // 94 * 0.25rem
        95: "23.75rem", // 95 * 0.25rem
        96: "24rem", // 96 * 0.25rem
        97: "24.25rem", // 97 * 0.25rem
        98: "24.5rem", // 98 * 0.25rem
        99: "24.75rem", // 99 * 0.25rem
        100: "25rem", // 100 * 0.25rem
        101: "25.25rem", // 101 * 0.25rem
        102: "25.5rem", // 102 * 0.25rem
        103: "25.75rem", // 103 * 0.25rem
        104: "26rem", // 104 * 0.25rem
        105: "26.25rem", // 105 * 0.25rem
        106: "26.5rem", // 106 * 0.25rem
        107: "26.75rem", // 107 * 0.25rem
        108: "27rem", // 108 * 0.25rem
        109: "27.25rem", // 109 * 0.25rem
        110: "27.5rem", // 110 * 0.25rem
        111: "27.75rem", // 111 * 0.25rem
        112: "28rem", // 112 * 0.25rem
        113: "28.25rem", // 113 * 0.25rem
        114: "28.5rem", // 114 * 0.25rem
        115: "28.75rem", // 115 * 0.25rem
        116: "29rem", // 116 * 0.25rem
        117: "29.25rem", // 117 * 0.25rem
        118: "29.5rem", // 118 * 0.25rem
        119: "29.75rem", // 119 * 0.25rem
        120: "30rem", // 120 * 0.25rem
        121: "30.25rem", // 121 * 0.25rem
        122: "30.5rem", // 122 * 0.25rem
        123: "30.75rem", // 123 * 0.25rem
        124: "31rem", // 124 * 0.25rem
        125: "31.25rem", // 125 * 0.25rem
        126: "31.5rem", // 126 * 0.25rem
        127: "31.75rem", // 127 * 0.25rem
        128: "32rem", // 128 * 0.25rem
        129: "32.25rem", // 129 * 0.25rem
        130: "32.5rem", // 130 * 0.25rem
        131: "32.75rem", // 131 * 0.25rem
        132: "33rem", // 132 * 0.25rem
        133: "33.25rem", // 133 * 0.25rem
        134: "33.5rem", // 134 * 0.25rem
        135: "33.75rem", // 135 * 0.25rem
        136: "34rem", // 136 * 0.25rem
        137: "34.25rem", // 137 * 0.25rem
        138: "34.5rem", // 138 * 0.25rem
        139: "34.75rem", // 139 * 0.25rem
        140: "35rem", // 140 * 0.25rem
        141: "35.25rem", // 141 * 0.25rem
        142: "35.5rem", // 142 * 0.25rem
        143: "35.75rem", // 143 * 0.25rem
        144: "36rem", // 144 * 0.25rem
        145: "36.25rem", // 145 * 0.25rem
        146: "36.5rem", // 146 * 0.25rem
        147: "36.75rem", // 147 * 0.25rem
        148: "37rem", // 148 * 0.25rem
        149: "37.25rem", // 149 * 0.25rem
        150: "37.5rem", // 150 * 0.25rem
      },
    },
  },
  plugins: [],
};
