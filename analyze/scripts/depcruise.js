const depcruise = require('dependency-cruiser').cruise;
const io = require('dependency-cruiser/src/cli/io');

let dependenciesInAGraphVizDotScript = depcruise([
    "./src"
], {
    exclude       : "(nod_modules)",
    // exclude       : "(nod_modules)$",
    // exclude: "",
    moduleSystems : ["es6", "cjs", "amd"],
    outputType    : "dot",
    prefix        : "../"
});

io.write('-', dependenciesInAGraphVizDotScript.modules);
