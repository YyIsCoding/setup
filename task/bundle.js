import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';

export default function bundle() {
	return new Promise((resolve, reject) => {
		var bundler;
		function onComplete(err, stats) {
			if(err){
				return reject(err);
			};
			console.log(stats.toString(webpackConfig.stats));
			var jsonStats = stats.toJson();
			if(jsonStats.errors.length > 0){
				process.exit(1);
			}
			return resolve();
		}
		if(true) {
			bundler = webpack(webpackConfig);
			bundler.run((err, stats) => {
				if(err) {
					return reject(err);
				}
				console.log(stats.toString(webpackConfig.stats));
				var jsonStats = stats.toJson();
				if(jsonStats.errors.length > 0) {
					process.exit(1);
				};

				return resolve();
			});
		}else{
			
		}
	})
}