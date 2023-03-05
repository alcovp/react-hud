const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./dev/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'demo'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        port: 3000,
        static: './demo',
        // hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};