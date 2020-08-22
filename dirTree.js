const fs = require('fs');

const dirTree = require("./pythonDirectoryConverter");
const flatten = require('tree-flatten');

const filteredTree = dirTree("./Python-master", { extensions: /\.py/ });


const flattenTree =   flatten(filteredTree, 'children')

//console.dir(filteredTree, { depth: null});

//console.dir(flattenTree, { depth: null});

const length = flattenTree.length

for ( let i = 0; i < length - 1; i++){
	flattenTree[ i + 1].index = i
}

fs.writeFile("./pythonDataIndexed.js", JSON.stringify(flattenTree), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
