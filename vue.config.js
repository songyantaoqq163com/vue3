const { defineConfig } = require('@vue/cli-service')
const os = require('os')

function getLocalIp() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return '127.0.0.1'
}

module.exports = defineConfig({
  transpileDependencies: [],
  lintOnSave:false,
  devServer:{
    host:"0.0.0.0",
    port: 8001,
    allowedHosts: 'all',
    onListening: function(devServer) {
      const port = devServer.server.address().port
      const localIp = getLocalIp()
      console.log(`\n  Network:  http://${localIp}:${port}/\n`)
    }
  }
})
