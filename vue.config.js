
module.exports = {
  publicPath: "/recruitment-frontend/",
  runtimeCompiler: true,
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  },
  productionSourceMap: false,
}
