const fs = require('fs');

const dirTree = require("./cplusplusDirectoryConverter");
const flatten = require('tree-flatten');

const filteredTree = dirTree("./C-Plus-Plus-master", { extensions: /\.(cpp|h)$/ });


const flattenTree =   flatten(filteredTree, 'children')

//console.dir(filteredTree, { depth: null});

//console.dir(flattenTree, { depth: null});

const length = flattenTree.length

for ( let i = 0; i < length - 1; i++){
	flattenTree[ i + 1].index = i
}

for(let i = 0; i < length - 1; i++){
  flattenTree[ i + 1 ].title	= flattenTree[ i + 1 ].title.toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

fs.writeFile("./cplusplusDataMain.js", JSON.stringify(flattenTree), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
