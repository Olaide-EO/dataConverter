const fs = require('fs');

const dirTree = require("./javascriptDirectoryConverter");
const flatten = require('tree-flatten');

const filteredTree = dirTree("./Javascript-master", { extensions: /\.(md|js|py|html)$/, exclude: /__test__|_test_/ });


const flattenTree =   flatten(filteredTree, 'children')

//console.dir(filteredTree, { depth: null});

//console.dir(flattenTree, { depth: null});

const length = flattenTree.length

for ( let i = 0; i < length; i++){
	flattenTree[i].index = i
}

for(let i = 0; i < length; i++){
  flattenTree[i].title	= flattenTree[i].title
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

fs.writeFile("./javascriptDataMain.js", JSON.stringify(flattenTree), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
