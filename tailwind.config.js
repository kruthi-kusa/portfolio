/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          "primary-foreground": "var(--primary-foreground)",
          secondary: "var(--secondary)",
          "secondary-foreground": "var(--secondary-foreground)",
          accent: "var(--accent)",
          "accent-foreground": "var(--accent-foreground)",
          muted: "var(--muted)",
          "muted-foreground": "var(--muted-foreground)",
          card: "var(--card)",
          "card-foreground": "var(--card-foreground)",
          ring: "var(--ring)",
        },
        fontFamily: {
          sans: ["var(--font-sans)"],
          mono: ["var(--font-mono)"],
        },
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
          },
        },
        animation: {
          "fade-in": "fadeIn 0.5s ease-in-out",
          "slide-up": "slideUp 0.5s ease-out",
          "slide-in-right": "slideInRight 0.5s ease-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          slideUp: {
            "0%": { transform: "translateY(20px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
          slideInRight: {
            "0%": { transform: "translateX(20px)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" },
          },
        },
      },
    },
    plugins: [],
  };