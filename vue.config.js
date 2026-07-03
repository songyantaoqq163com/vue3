const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [],
  lintOnSave:false,
  devServer:{
    host:"0.0.0.0",
    port: 8001,
  }
})
