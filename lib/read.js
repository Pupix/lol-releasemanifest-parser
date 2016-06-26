
'use strict';

module.exports = function (data, cb) {
    let rm = {};

    function solveDir(dir) {

        let result = {
            name: data.strings[dir.nameIndex],
            files: [],
            subDirectories: []
        };

        for (let i = dir.filesStartIndex; i < dir.filesStartIndex + dir.filesCount; i += 1) {
            let file = data.files[i];
            result.files.push({
                name: data.strings[file.nameIndex],
                size: file.size,
                hash: file.hash
            });
        }
        
        for (let i = dir.subDirectoriesStartIndex; i < dir.subDirectoriesStartIndex + dir.subDirectoriesCount; i += 1) {
            let dir = data.directories[i];
            result.subDirectories.push(solveDir(dir));
        }

        return result
    }

    rm = solveDir(data.directories[0]);

    cb(null, rm);
};