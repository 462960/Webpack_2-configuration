
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack2-validator');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



// const config = {
//      entry: __dirname + '/dev/index.js',
//     output: {
//       path: __dirname +  '/dist',
//       filename: 'bundle.js'
//     },
//     devtool: 'source-map',

//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: 'babel-loader'
            //     query: {
            //         presets: ['react', 'es2015', 'es2016']
            // }
        //  },
          // {
          //   test: /\.scss$/,
          //   loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap')
          // }
    //      ]
    // },
       // plugins: [
    //The same path automatically to be linked in <head> 
    //  new ExtractTextPlugin({filename: 'dist/styles/styles.css', allChunks: true}),
    //  new HTMLwebpackPlugin({
    //   template: './dev/index.template.html',
    //   inject: true
    // }),
    // ],

//     resolve: {
//       extensions: ['','.js','.jsx','.css', '.scss']
//     }
// };

// module.exports = config;





//module.exports = validate(config);



// Taken here
// https://github.com/bultas/minimal/blob/master/webpack.config.js
// const path = require('path');
// const config = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'app.js',
//         publicPath: 'temp/' // for webpack-dev-server output
//     },
//     module: {
//         rules: [
//         { 
//             test: /\.(js|jsx)$/,
//             use: [ 
//             {loader: 'babel-loader'} 
//             ]
//         }
//             ],
//     },
//     resolve: {
//         alias: {
//             src: path.resolve(__dirname, 'src')
//         }
//     },
//     devtool: "eval",
//     devServer: {
//         contentBase: path.join(__dirname, "dev"),
//         compress: true,
//         port: 9000
//     }
// };

// module.exports = validate(config);



const config = {
     entry: __dirname + '/dev/index.js',
    output: {
      path: __dirname +  '/dist',
      filename: 'bundle.js'
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
          },
          // {
          //   test: /\.scss$/,
          //   use: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap')
          // }
         ]
    },
    resolve: {
      extensions: ['.js','.jsx','.css', '.scss']
    }
};

module.exports = config;