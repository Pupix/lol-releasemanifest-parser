'use strict';

module.exports = function (parser, cb) {

    var rm = {
            header: {},
            directories: [],
            files: [],
            strings: []
        };

    rm.header.magic = parser.string(4);
    rm.header.type     = parser.uint();
    rm.header.entries  = parser.uint();
    rm.header.version  = parser.uint();
    rm.directoriesCount = parser.uint();
    
    for (let i = 0; i < rm.directoriesCount; i += 1) {
        rm.directories.push({
            nameIndex  : parser.uint(),
            subDirectoriesStartIndex: parser.uint(),
            subDirectoriesCount: parser.uint(),
            filesStartIndex  : parser.uint(),
            filesCount  : parser.uint()
        });
    }

    rm.filesCount = parser.uint();

    for (let i = 0; i < rm.filesCount; i += 1) {
        rm.files.push({
            nameIndex     : parser.uint(),
            version       : parser.uint(),
            hash          : parser.hex(16).join(''),
            // Flags:
            // 0x01 :  Managedfiles dir (?)
            // 0x02 :  Archived/Filearchives dir (?)
            // 0x04 :  (?) #
            // 0x10 :  Compressed
            // lol_air_client: all 0
            // lol_air_client_config_euw: all 0
            // lol_launcher: all & 4
            // lol_game_client: all & 4
            // lol_game_client_en_gb: all 5
            flags         : parser.uint(),
            size          : parser.uint(),
            compressedSize: parser.uint(),
            unk           : parser.uint(),
            type          : parser.short(),
            unk1          : parser.ubyte(),
            unk2          : parser.ubyte()
        });
    }

    rm.stringsCount = parser.uint();
    rm.stringSize  = parser.uint();

    for (let i = 0; i < rm.stringsCount; i += 1) {
        rm.strings.push(parser.string0());
    }

    cb(null, rm);

};