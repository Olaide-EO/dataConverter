const fs = require('fs');

const dirTree = require("./javaDirectoryConverter");
const flatten = require('tree-flatten');

const filteredTree = dirTree("./Java-master", { extensions: /\.java/ });


const flattenTree =   flatten(filteredTree, 'children')

//console.dir(filteredTree, { depth: null});

//console.dir(flattenTree, { depth: null});

const length = flattenTree.length

for ( let i = 0; i < length - 1; i++){
	flattenTree[ i + 1].index = i
}

//.split(/(?=[A-Z])/);

for(let i = 0; i < length - 1; i++){
  flattenTree[ i + 1 ].title	= flattenTree[ i + 1 ].title
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

for(let i = 0; i < length - 1; i++){
    flattenTree[ i + 1 ].title	= flattenTree[ i + 1 ].title
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  
fs.writeFile("./javaDataMain.js", JSON.stringify(flattenTree), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
