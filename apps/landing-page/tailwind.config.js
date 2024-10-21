/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#002c77",
        "neutral-white": "#fff",
        "neutral-silver": "#f5f7fa",
        gray: "#1b222f",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      xs: "12px",
      smi: "13px",
      lg: "18px",
      "5xl": "24px",
      "29xl": "48px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
