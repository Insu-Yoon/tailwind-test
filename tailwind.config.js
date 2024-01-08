/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    backgroundImage: {
      vector: "url('./Vector.svg')",
    },
    fontFamily: {
      pre: ["Pretendard"],
    },
    extend: {
      lineHeight: {
        "48px": "48px",
      },
      gap: {
        "68px": "68px",
      },
      spacing: {
        15: "3.75rem",
        "50px": "50px",
      },
      width: {
        "860px": "860px",
        "200px": "200px",
      },
      height: {
        "200px": "200px",
        "820px": "820px",
      },
      colors: {
        grayF0: "#F0F2F2",
        gray3: "#333",
        gray6: "#666",
        gray9: "#999",
        grayC: "#CCC",
        grayD: "#DDD",
        grayF: "#F5F5F5",
        realgray: {
          100: "#a6a6a6",
          200: "#DDDDDD",
          300: "#DDDDDD",
          400: "#BBBBBB",
          500: "#999999",
          600: "#999999",
          700: "#666666",
          800: "#666666",
          900: "#333333",
        },
        primary: {
          50: "#fcfcfd",
          100: "#f5f6f8",
          200: "#e5e7eb",
          300: "#9ca3af",
          400: "#9ca3af",
          500: "#9ca3af",
          600: "#4b5563",
          700: "#374151",
          800: "#27272a",
          900: "#111827",
        },
        darkPrimary: {
          100: "#e4e4e7",
          200: "#cccdd0",
          300: "#959595",
          400: "#7d7f84",
          500: "#434548",
          600: "#2d2f33",
          700: "#202126",
          800: "#15171c",
          900: "#0d0f13",
        },
        gray: {
          100: "#f4f5f7",
          300: "#8f8f8f",
          500: "#737373",
          900: "#606682",
        },
      },
    },
  },
  plugins: [],
};
