const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'), //'./src/index.js', // 2
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
