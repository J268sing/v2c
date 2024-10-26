const path = require('path');

module.exports = {
  entry: "./frontend/static/js/index.js", // Adjust to match your entry file
  output: { 
    filename: "bundle.js",
    path: path.resolve(__dirname, 'frontend/static/bundle')  // Adjust to match your desired output directory

  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["@babel/preset-env", {
                "useBuiltIns": "usage",
                "corejs": 3,
              }],
              "@babel/preset-react"
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-private-methods'
            ]
          }
        }
      }
    ]
  },
};
