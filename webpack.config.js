const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const path = require( 'path' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );
const glob = require("glob");
const production = process.env.NODE_ENV === '';
const blockJS = glob.sync("	./blocks/**/main.js").reduce((acc, item) => {
	const name = "./"+item.split("/").slice(2,-1)+"/main";
	acc[name] = item;
	return acc;
}, {});
const blockStyle = glob.sync("./blocks/**/style.scss").reduce((acc, item) => {
	const name = "./"+item.split("/").slice(2,-1)+"/style";
	acc[name] = item;
	return acc;
}, {});
const blockEditor = glob.sync("./blocks/**/editor.scss").reduce((acc, item) => {
	const name = "./"+item.split("/").slice(2,-1)+"/editor";
	acc[name] = item;
	return acc;
}, {});
module.exports = {
	...defaultConfig,
	entry: Object.assign({},blockJS,blockEditor,blockStyle),
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			cacheGroups: {
				editor: {
					name: module => {
						const list = module.identifier().split(path.sep);
						list.pop();
                        return list.pop() + "/editor";
                    },
					test: /editor\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				style: {
					name: module => {
						const list = module.identifier().split(path.sep);
						list.pop();
                        return list.pop() + "/style";
                    },
					test: /style\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				default: false,
			},
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(sc|sa|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: ! production,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! production,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								postcssPresetEnv( {
									stage: 3,
									features: {
										'custom-media-queries': {
											preserve: false,
										},
										'custom-properties': {
											preserve: true,
										},
										'nesting-rules': true,
									},
								} ),
							],
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new IgnoreEmitPlugin( [ 'editor.js', 'style.js' ] ),
	],
};
