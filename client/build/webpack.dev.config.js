'use strict'
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: true
});

module.exports = {
	entry: ['./client/build/dev-client.js','./client/app/app.module.js'],
	
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.min.js'
	},
	module: {
		rules: [
			{ test: /\.(jpg|png|svg)$/, use: [ "file-loader" ] },
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [ "file-loader" ]
			},		
			{
	        	test: /\.scss$/,
	        	use: extractSass.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                // use style-loader in development
	                fallback: "style-loader"
	            }),
	            include: [path.join(__dirname, '..', 'app'),
	            	path.join(__dirname, '..','..', 'node_modules','bootstrap-sass','assets','stylesheets')

	            ]
	      	},
			{
				test: /\.(html)$/,
			  	
			  	use: [
				    {
				      	loader: 'ngtemplate-loader',
				      	options: {
				        	angular: true,
				      	},
				    },
				    {
				      	loader: 'html-loader',
				    },
				],			  	
			    include: [path.join(__dirname, '..', 'app')]
			  	
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: [
						['es2015']
					]
				},
				include: [path.join(__dirname, '..', 'app')]
				//exclude: (/node_modules|server/)
			}
			

		]
	},
	plugins: [
		//new UglifyJSPlugin(),		
		extractSass,
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'client/index.html',
			template: 'client/index.html',
			inject: true
		}),
		new HtmlWebpackIncludeAssetsPlugin({
		    assets: [
		      
		      { path: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', type: 'css' }
		    ],
		    append: false,
		    publicPath: ''
		})
		
	],
	stats: {
		colors: true
	},
	devtool: '#cheap-module-eval-source-map'
}