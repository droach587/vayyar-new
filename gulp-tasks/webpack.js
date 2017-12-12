const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const gulpIf = require('gulp-if');
const gulpVars = require('require-dir')('../gulp-vars');
const isProduction = gulpVars.vars();
const path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");
const ModernizrWebpackPlugin = require("modernizr-webpack-plugin");

//**
//
// Webpack
//
//**

var config = {
  "options" : [
		"setClasses",
		"addTest",
		"html5printshiv",
		"testProp",
		"fnBind",
	],
  "feature-detects": [
    'touchevents',
  ],
  minify: true,
}

gulp.task('webpack', () => {
  return gulp.src('source/assets/js/main.js')
    .pipe(
      webpackStream({
        output: {
          filename: 'bundle.js',
          sourceMapFilename: 'bundle.map',
        },
        watch: false,
        devtool: 'source-map',
        plugins: [
          new BabiliPlugin(),
          new ModernizrWebpackPlugin(config),
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
        ],
        module: {
          loaders: [
            {
              test: /\.js$/,
              // exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            },
          ],
        },
        resolve: {
          alias: {
            jquery: path.resolve('node_modules', 'jquery/dist/jquery.js'),
            'cookie' : path.resolve('node_modules', 'jquery.cookie/jquery.cookie.js')
          }
        }
      }, webpack)
    )
    .pipe(gulp.dest('build/assets/js'));
});
