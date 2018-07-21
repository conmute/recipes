const colony = require('colony');
const mkdirSync = require('./inc/mkdirSync');
const { exec } = require('child_process');

console.log('es6 => cjs')
const babel = exec(`
    babel src/ \
        -d tmp/cjs \
        --copy-files \
        --ignore '**/__tests__/*,**/*.test.js,**/*-story.js'
`);

babel.on('exit', () => {
    mkdirSync('./tmp');
    colony.build([
        './tmp/cjs/index.js',
        './tmp/cjs/App.js',
    ], {
        readme: './Readme.md',
        traverseModules: false,
        directory: './tmp/colony'
    }, () => {
        console.log('colony generated')
    });
})
