const fs = require('fs');

const dirTree = require("./children");
const flatten = require('tree-flatten');

const filteredTree = dirTree("./Python-master", { extensions: /\.py/ });


const flattenTree =   flatten(filteredTree, 'children')

//console.dir(filteredTree, { depth: null});

//console.dir(flattenTree, { depth: null});

fs.writeFile("./trans.js", JSON.stringify(flattenTree), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
