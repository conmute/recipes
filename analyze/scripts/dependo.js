const Dependo = require('dependo');
const fs = require('fs');
const mkdirSync = require('./inc/mkdirSync');
 
const dependo = new Dependo('./src/', {
  format: 'es6',
  exclude: 'node_modules',
  transform: function(dep){
    return dep;
  }
});

mkdirSync('./tmp');

fs.writeFile("./tmp/dependo.html", dependo.generateHtml(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Done!");
});
