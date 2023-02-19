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
            
            width: '450px',
            margin: 'auto',
            backgroundColor: theme('colors.white'),
            borderRadius: '16px',
            transition: 'all 0.3s ease',
            "@media (max-width: 850px)": {
            },     
            "@media (max-width: 545px)": {
            },
            '.modal-body': {
                margin: '20px 20px',
            },
            '.modal-footer': {
                margin: '20px 25%',
            },
        },
    }
  });
});
