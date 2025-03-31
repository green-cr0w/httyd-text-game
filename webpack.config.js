const path = require("path");

module.exports = {
  mode: "development", // Explicitly set the mode
  entry: "./code/demo/Demo.ts", // Your main TS file
  output: {
    filename: "bundle.js", // The final bundled JS file
    path: path.resolve(__dirname, "dist"), // Output folder
    devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // Avoid eval in source maps
    devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // Avoid eval fallback
  },
  optimization: {
    minimize: false, // Disable minification for easier debugging
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
  devtool: "nosources-source-map", // Avoid eval completely
};
