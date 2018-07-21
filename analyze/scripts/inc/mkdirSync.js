const fs = require('fs');

module.exports = function (dirPath) {
	try {
	  fs.mkdirSync(dirPath)
	} catch (err) {
	  if (err.code !== 'EEXIST') throw err
	}
}
