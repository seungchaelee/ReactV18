const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  }, // 입력
  output: {
    path: path.join(__dirname, 'dist'), //현재 폴더 안에 dist 경로로
    filename: 'app.js'
  }, // 출력
};
