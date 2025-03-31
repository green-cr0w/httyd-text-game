const path = require("path");

module.exports = {
  entry: "./code/demo/Demo.ts", // Your main TS file
  output: {
    filename: "bundle.js", // The final bundled JS file
    path: path.resolve(__dirname, "dist"), // Output folder
  },
  optimization: {
    minimize: false, // Minify the output for production
  },
  resolve: {
    extensions: [".ts", ".js"], // Support importing .ts files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: false
};
