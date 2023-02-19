const plugin = require('tailwindcss/plugin')

module.exports = plugin( function ({ addComponents, theme}){
    addComponents({
        '.form': {
            with: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            '.form__content': {
                minWidth: '300px',
                width: '450px',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderRadius: '0.5rem',
                borderColor: '#e2e8f0',
                padding: '40px 30px 0px 30px',
                boxShadow: '0 5px 10px rgb(0, 0, 0, 0.25)'
            }
        },
        '.input__formkit':{
                borderStyle: 'solid',
                borderWidth: '2px',
                borderRadius: '0.5rem',
                borderColor: '#e2e8f0',
                '&:focus':{
                    borderColor: '#475569',
                    outline: '2px solid transparent',
                    outlineOffset: '2px'
                }
        }
    })
})