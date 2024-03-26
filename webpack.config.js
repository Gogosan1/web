const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const htmlTemplates = [
    {
      filename: 'index.html',
      template: path.resolve(__dirname,'','index.html'),
      //chunks: ['styles']
    },
    {
        filename: 'pages/calc.html',
        template: path.resolve(__dirname, 'pages', 'calc.html'),
        //chunks: ['styles']
    },
    {
        filename: 'pages/first.html',
        template: path.resolve(__dirname, 'pages', 'first.html'),
        chunks: ['styles']
    },
    {
        filename: 'pages/second.html',
        template: path.resolve(__dirname, 'pages', 'second.html'),
        chunks: ['styles']
    },
    {
        filename: 'pages/slider.html',
        template: path.resolve(__dirname, 'pages', 'slider.html'),
        chunks: ['styles']
    },
    {
        filename: 'pages/task_two.html',
        template: path.resolve(__dirname, 'pages', 'task_two.html'),
        chunks: ['styles']
    },
    {
        filename: 'pages/third.html',
        template: path.resolve(__dirname, 'pages', 'third.html'),
        chunks: ['styles']
    }
];




module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        calc: './js/calc.js',
        slider: './js/slider.js',
        index: './js/index.js'
},
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'out')
    },
    //ниже добавлен babel-loader, для совместимости кода js во всех браузерах
    module: {
        rules: [
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                ]
                }
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        ]
    },
    // ниже добавлены 2 параметра, отвечающие за webpack server
    devServer: {
        static: './out',
    },
    optimization: {
        runtimeChunk: 'single',
    },

    plugins: htmlTemplates.map(template => new HtmlWebpackPlugin(template))
}