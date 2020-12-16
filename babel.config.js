module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  proxy: {
    '/': {
      target: 'http://localhost:8060/',
      changeOrigin: true,
      pathRewrite: {
        '^/': '/'
      }
    }
  }
}
