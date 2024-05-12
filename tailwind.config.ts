const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  // Your existing Tailwind CSS configuration goes here
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-pattern': "url('/img/image-1.jpg')",
      },
      gridTemplateColumns: {
        'new3': 'repeat(3, 100%)',
        'new5': 'repeat(5, auto)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
    fontFamily: {
      'custom': ['Beon', 'sans-serif'],
    },
  },
  plugins: [],
});
