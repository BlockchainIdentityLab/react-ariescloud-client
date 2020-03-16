const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {

    const env = dotenv.config().parsed;

    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {


        // 1
        entry: './src/index.js',
        node: {
            fs: "empty"
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js']
        },
        // 2
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        // 3
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin(envKeys)
        ],
        devServer: {
            contentBase: './dist',
            hot: true
        }
    }
};
