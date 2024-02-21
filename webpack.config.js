const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   configFile: path.resolve(__dirname, "tsconfig.json"),
            // },
          },
        ],
        // exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
    // loaders: [
    //   {
    //     test: /.js$/,
    //     loader: "babel-loader",
    //   },
    // ],
  },
};
