const path = require('path');
const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
  fixBabelImports,
  useBabelRc
} = require('customize-cra');
module.exports = override(
  addDecoratorsLegacy(), // 装饰器支持
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@com': path.resolve(__dirname, 'src/components'),
    '@network': path.resolve(__dirname, 'src/network'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@views': path.resolve(__dirname, 'src/views'),
  }), // 添加路径别名

  // ui框架按需加载
  fixBabelImports('import', {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "scss" // `style: true` 会加载 less 文件
  }), //若是多个 ui框架 就可以在添加  },antd)
  useBabelRc(), //开启 .babelrc 文件
)