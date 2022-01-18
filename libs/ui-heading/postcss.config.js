const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: { config: join(__dirname, 'tailwindcss.config.js') },
    autoprefixer: {},
  },
};
