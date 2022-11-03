/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    theme: {
        extend: {
            colors: {
                custom:{
                    1: "#117399",
                    2: "#0292b7",
                    3: "#b1d4e0"
                }
            },
            aspectRatio:{
                "banner": "995 / 282",
                "3/2": "3 / 2"
            }
        },
    },
    plugins: [],
}
