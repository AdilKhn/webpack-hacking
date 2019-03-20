const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {

  plugins: [
    new WebpackShellPlugin(
      {
        onBuildStart:['echo "Webpack Start"'],
        onBuildEnd:['node dist/main.js'],
        dev: false
      
      }
    ) 
  ]
}
