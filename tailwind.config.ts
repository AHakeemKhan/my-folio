import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
          container : {
                center : true,
                padding : "10px"
          },
      colors: {
        accent : "#48cae4"
      },
    },
  },
  plugins: [],
} satisfies Config;