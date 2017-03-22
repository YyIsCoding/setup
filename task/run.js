import chalk from 'chalk';

function format(time){
	return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

export default function run(fn, options) {
	const task = typeof fn.default === 'undefined' ? fn : fn.default;
	const start = new Date();
	console.log(`[${chalk.magenta(format(start))}] [${chalk.yellow('vue+webpack')}] Starting '${chalk.cyan(fn.name)}' ...`);

	return task(options).then(() => {
		const end = new Date();
		const time = end.getTime() - start.getTime();
		console.log(`[${chalk.magenta(format(end))}] [${chalk.yellow('vue+webpack')}] Fininshed '${chalk.cyan(fn.name)}' after ${time} ms`);
	});
}

if(process.mainModule.children.length === 0 && process.argv.length > 2){
	delete require.cache[__filename];
	const module = require(`./${process.argv[2]}.js`).default;
	run(module).catch((err) => {
		console.error(err.stack);
		process.exit(1);
	});
}