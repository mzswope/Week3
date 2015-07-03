'use strict';

function fileactions(err, fileContent){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(fileContent);
    console.log(episodes[0]);
}



module.exports = fileactions;