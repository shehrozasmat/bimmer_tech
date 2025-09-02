export default defineNuxtConfig({
    srcDir: 'app/',
    compatibilityDate: '2025-09-02',
    ssr: true,
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss'
    ],
    googleFonts: {
        families: {
            Strait: true,
        },
        display: 'swap'
    },
    devtools: { enabled: true },
    css: ['@/assets/main.css', '@/assets/custom.css'],
    // Remove the postcss configuration as it's handled by @nuxtjs/tailwindcss
    runtimeConfig: {
        public: {
            apiBase: 'http://127.0.0.1:8000', // Symfony URL
        }
    },

})
