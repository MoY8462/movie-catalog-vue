const plugin = require('tailwindcss/plugin')

module.exports = plugin( function ({ addBase, theme}){
    addBase({
        'body, #app, html': {
            margin: '0px',
            color: theme('colors.white'),
            backgroundColor: theme('colors.sky.900')
        }
    })
})