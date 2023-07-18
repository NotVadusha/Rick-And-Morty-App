/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
            'karla': ['Karla', 'sans-serif']
        },
        extend: {
            extend: {
                spacing: {
                    '152': '38rem'
                },
            },
            plugins: [],
        }
    }
}
