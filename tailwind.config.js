/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "#854dff",
        "light-red": "#ff5757",
        "off-white": "#f0f0f0",
        "light-grey": "#dbdbdb",
        "smokey-grey": "#716f6f",
        "0ff-black": "#141414",
      }
    },
  },
  plugins: [],
}

