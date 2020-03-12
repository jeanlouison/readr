const fs = require('fs');

module.exports = (app) => {
	
	// read the files of the current directory
	fs.readdirSync(__dirname)
	.filter((filename) => filename !== 'index.js') // avoid this file
	.forEach((filename) => {
		console.log(`routes/index.js: fetching ${filename}...`);
		// load routes array and register them
		require('./' + filename).forEach((r) => {
			console.log(`routes/index.js: ${filename}: creating route ${r.method}`);
			app[r.method](r.url, r.func);
		});
	});

};