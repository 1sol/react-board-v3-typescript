const path = require("path");

module.exports = {
  entry: [
      "./src/test.js",
      "./src/style.css"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  resolve: {
    root: path.resolve('./src')
  },
  loaders: [
    {
        test: /\.css$/,
        loader: 'style!css-loader'
    }
  ],
  mode: "none"
};