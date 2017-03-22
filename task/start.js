import run from './run';
import bundle from './bundle';
import server from './server';

export default async function start() {
	await run(bundle);
	await run(server);
}
