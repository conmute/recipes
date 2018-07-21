const madge = require('madge');
const config = require('./madge.conf');
const mkdirSync = require('./inc/mkdirSync');

function makeMadge(opts) {
	return madge(opts.target, config)
		.then((res) => res.image(opts.report))
		.then((writtenImagePath) => {
			console.log('Image written to ' + writtenImagePath);
		});
}

mkdirSync('./tmp');

const images = [{
	target: './src/index.js',
	report: './tmp/index.svg'
}, {
	target: [
		'./src/index.js',
		'./src/App.js'
	],
	report: './tmp/app.svg'
}].map(x => makeMadge(x));

const orphansReport = madge([
	'./src/',
]).then((res) => {
	console.log("Orphan list:")
	console.log(res.orphans().filter(x => !x.includes('__tests__')));
});

Promise.all([ ...images, orphansReport]).then(_ => {
	console.log('done!');
});

