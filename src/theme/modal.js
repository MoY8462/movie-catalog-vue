const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    ".modal": {
        position: 'fixed',
        display: 'flex',
        zIndex: '9998',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: theme('colors.gray.500.80'),
        transition: 'opacity 0.3s ease',
        
        '.modal-container': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '450px',
            margin: 'auto',
            padding: '20px 20px',
            backgroundColor: theme('colors.sky.900'),
            borderRadius: '16px',
            transition: 'all 0.3s ease',
            "@media (max-width: 850px)": {
            },     
            "@media (max-width: 545px)": {
            },
            '.modal-container__info': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '.container__info__title': {
                    fontSize: '1.25rem', /* 20px */
                    lineHeight: '1.75rem', /* 28px */
                    fontWeight: '700',
                    textAlign: 'center',
                    margin: '1rem 0 0 0'
                },
                '.container__info__img': {
                    height: '15rem',
                    width: '12rem',
                    margin: '1rem 0 0 0'
                },
                '.container__info__content': {
                    margin: '1rem 0 0 0',
                    textAlign: 'justify',
                }
                
            },
            '.modal-container__button': {
                margin: '20px 0px',
                height: '3rem',
                width: '60%'
            },
        },
    }
  });
});
