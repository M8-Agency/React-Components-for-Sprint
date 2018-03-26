module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'sprint-react-web-components',
      externals: {
        react: 'React'
      }
    }
  }
}
