/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 20px 70px -12px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        "fontFamily" : ["League Spartan"],
      },colors: {
      "DesaturatedDarkCyan": "hsl(180, 29%, 50%)",
      "LightGrayishCyanB": "hsl(180, 52%, 96%)",
      "LightGrayishCyanF": "hsl(180, 31%, 95%)",
      "DarkGrayishCyan": "hsl(180, 8%, 52%)",
      "VeryDarkGrayishCyan": "hsl(180, 14%, 20%)",
    }
    },
    
  },
  plugins: [],
}
