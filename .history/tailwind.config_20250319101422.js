/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#0D1117",        // Thay #1b1b1b bằng đen đậm hơn, hiện đại, phổ biến trong các giao diện tối
        light: "#F9FAFB",       // Thay #fff bằng trắng ngà nhẹ, tạo cảm giác ấm áp hơn
        accent: "#6D28D9",      // Thay #7B00D3 bằng tím đậm hơn, sang trọng và hiện đại
        accentDark: "#F59E0B",  // Thay #F7C566 bằng vàng cam đậm, nổi bật hơn
        gray: "#6B7280"         // Thay #747474 bằng xám trung tính nhẹ, dễ phối hợp
      },
      fontFamily:{
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"]
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        }
      },
      screens:{
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px"
        // @media (min-width: 480px){...}
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
