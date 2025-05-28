// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),  // Usa el nuevo paquete
    require('autoprefixer'),
  ],
}
