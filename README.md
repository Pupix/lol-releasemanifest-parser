# lol-releasemanifest-parser
A parser for releasemanifest files from League of Legends.

## Download
lol-releasemanifest-parser is installable via:

- [GitHub](https://github.com/Pupix/lol-releasemanifest-parser) `git clone https://github.com/Pupix/lol-releasemanifest-parser.git`
- [npm](https://www.npmjs.com/): `npm install lol-releasemanifest-parser`

## Usage example

```js
var rmParser = require('lol-releasemanifest-parser'),
    rm = new rmParser();

    rm.read('releasemanifest', function (err, data) {
        console.log(data);
        //  {
        //    name: "",
        //    files: [...]
        //    subDirectories: [...]
        //  }
    });

```

## Available methods

**N.B:** All methods act as promises if no callback is passed.

### parse(path, cb)

It will roughly parse a releasemanifest file from the given path.

**Parameters**

1. **path {string}** A path to where the file to parse resides.
2. **[cb] {Function}** A callback called with `(error, parsedData)` as arguments.

### read(path, cb)

It will read a releasemanifest file from the given path, casting all the data into the right variable.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.