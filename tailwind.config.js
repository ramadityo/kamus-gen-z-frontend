/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                background: "#FBF6F8",
                // yellow: "#e5c890",
                // red: "#e78284",
                // teal: "#81c8be",
                // sky: "#99d1db",
                // sapphire: "#85c1dc",
                // blue: "#8caaee",
                // crust: "#232634",
            },
        },
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            defaultFlavour: "frappe",
        }),
    ],
};
