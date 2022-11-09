const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js",
	},

	devServer: {
		port: 3000,
		static: "./dist",
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
				},
			},
			{
				test: /\.(css)$/,
				use: ["style-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			minify: true,
		}),
		new CleanWebpackPlugin({
			protectWebpackAssets: false,
			cleanAfterEveryBuildPatterns: ["**/*.LICENSE.txt"],
		}),
	],
};
