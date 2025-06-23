import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        subbackground: "var(--sub-background)",
        subfontcolor: "var(--sub-font-color)",
        text: {
          default: "var(--text-default)",
          emphasis: "var(--text-emphasis)",
        },
        bg: {
          default: "var(--bg-default)",
          hover: "var(--bg-hover)",
          active: "var(--bg-active)",
          emphasis: "var(--bg-emphasis)",
        },
        border: "var(--border)",
        point: {
          red: "#f85149",
          blue: "#4493f8",
          green: "#3fb950",
          orange: "#ffa657",
          violet: "#7928CA",
          cyan: "#50E3C2",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        darkOnly: {
          text: "rgb(240, 246, 252)",
          subtext: "rgb(145, 152, 161)",
          bg: "rgb(13, 17, 23)",
          hover: "rgba(101, 108, 118, 0.2)",
          active: "rgba(101, 108, 118, 0.1)",
          emphasis: "rgb(1, 4, 9)",
          border: "rgb(61, 68, 77)",
        },
      },
      fontSize: {
        sm: "12px",
        default: "14px",
        lg: "24px",
        xl: "36px",
      },

      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            ["border-color"]: theme("colors.subfontcolor"),
          },
          "40%": {
            ["border-color"]: theme("colors.subfontcolor"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.point.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.point.pink"),
            color: theme("colors.white"),
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
