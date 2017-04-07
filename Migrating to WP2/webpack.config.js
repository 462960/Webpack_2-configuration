const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



//const config 
const config = {
  // Option One--------------------A
    // entry: './dev/index.js',
    // output: {
     // path: __dirname + './dist',
    //   filename: './dist/bundle.js'
    // },
    //------------------------------A


  // Option Two ---------------------B
     entry: __dirname + '/dev/index.js',
     //entry: APP_DIR + 'index.js',
    output: {
      path: __dirname +  '/dist',
     // path: BUILD_DIR,
      filename: 'bundle.js'
    },
  //---------------------------------B
  
    // Disable devtool to see compilated .css source
    devtool: 'source-map',
    //----------------------------------------------

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
     // Could be moved to .babelrc file, without query---C           
                query: {
                    presets: ['react', 'es2015']
            }
     // The end to .babelrc------------------------------C       
          },
     // Case of working with pure .css--D     
          // {
          //   test: /\.css$/,
          //   loader: 'style!css'
          // },
     // .css case ----------------------D     
          {
            test: /\.scss$/,
            // loader: 'style!css!sass', 
            loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
          }
         ]
    },
        plugins: [
                           // The same path automatically to be linked in <head> 
     new ExtractTextPlugin('dist/styles/styles.css', {allChunks: true}),
     new HTMLwebpackPlugin({
      template: './dev/index.template.html',
      inject: true
    }),
    ],

    // The resolve property is where you have to add all the file types you are using in your application
    // So, we can require('someModule') without extention
    resolve: {
      extensions: ['','.js','.jsx','.css', '.scss']
    }
};

module.exports = validate(config);