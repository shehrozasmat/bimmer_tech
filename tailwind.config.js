/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app.vue",
        "./pages/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.{vue,js,ts}",
        "**/node_modules/@bimmertech/ui-library/**/*.{vue,js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                strait: ['"Strait"', 'sans-serif'],
            }
        }
    },
    plugins: [],
}
