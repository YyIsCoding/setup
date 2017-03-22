export default function server() {
	return new Promise((resolve, reject) => {
		require('../server.js');
		resolve();
	});
}