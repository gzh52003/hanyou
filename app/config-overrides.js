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
    '@assets': path.resolve(__dirname, 'src/assets'),
  }), // 添加路径别名

  fixBabelImports('import', {
    "libraryName": "antd-mobile",
    "libraryDirectory": "es",
    "style": "css" // `style: true` 会加载 scss 文件
  }),
  useBabelRc(), //开启 .babelrc 文件
)