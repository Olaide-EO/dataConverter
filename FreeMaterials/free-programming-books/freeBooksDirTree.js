const fs = require('fs');
const dirTree = require("./freeBooksDirectoryConverter.js");
const flatten = require('tree-flatten');

const filteredTree = dirTree("./free-programming-books-master", { extensions: /\.(md|js|py|html)$/, exclude: /__init__\.py/ });
const flattenTree =   flatten(filteredTree, 'children')

const length = flattenTree.length

for ( let i = 0; i < length - 1; i++){
	flattenTree[ i + 1].index = i
}

for(let i = 0; i < length - 1; i++){
  flattenTree[ i + 1 ].title	= flattenTree[ i + 1 ].title.toLowerCase()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

fs.writeFile("./freeBooksDataMain.js", JSON.stringify(flattenTree), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
